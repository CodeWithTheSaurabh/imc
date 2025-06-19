/**
 * DateFilters Component - Government Standard Interface
 *
 * Professional date filtering component designed for government applications.
 * Provides clear, accessible interface for date-based data filtering with
 * comprehensive validation and user guidance.
 *
 * Government Compliance Features:
 * - WCAG 2.1 AA accessibility standards
 * - Clear visual hierarchy and labeling
 * - Comprehensive error messaging
 * - Professional government styling
 * - Detailed user instructions
 *
 * Filtering Logic:
 * - Specific date selection for exact date matching
 * - Date range selection for period-based filtering
 * - OR logic: data matches either specific date OR falls within date range
 * - Real-time validation with immediate feedback
 */

import React from 'react';
import { FILTER_STYLES, ICON_PATHS } from '../../constants/filterConstants';
import { validateDateRange } from '../../utils/filterValidation';

/**
 * DateFilters component for handling date-based filtering
 * @param {Object} props - Component props
 * @param {string} props.selectedDate - Currently selected specific date
 * @param {Function} props.setSelectedDate - Function to update selected date
 * @param {string} props.startDate - Currently selected start date for range
 * @param {Function} props.setStartDate - Function to update start date
 * @param {string} props.endDate - Currently selected end date for range
 * @param {Function} props.setEndDate - Function to update end date
 */
const DateFilters = ({
  selectedDate,
  setSelectedDate,
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) => {
  // Validation state
  const isDateRangeValid = validateDateRange(startDate, endDate);
  
  /**
   * Handles clearing the specific date filter
   */
  const handleClearSpecificDate = () => {
    setSelectedDate('');
  };
  
  /**
   * Handles clearing the date range filter
   */
  const handleClearDateRange = () => {
    setStartDate('');
    setEndDate('');
  };
  
  /**
   * Handles specific date input change
   * @param {Event} event - Input change event
   */
  const handleSpecificDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  
  /**
   * Handles start date input change
   * @param {Event} event - Input change event
   */
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  
  /**
   * Handles end date input change
   * @param {Event} event - Input change event
   */
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  
  /**
   * Gets the appropriate CSS class for date inputs based on validation state
   * @param {boolean} isValid - Whether the input is valid
   * @returns {string} CSS class string
   */
  const getDateInputClass = (isValid = true) => {
    return isValid ? FILTER_STYLES.DATE_INPUT : FILTER_STYLES.DATE_INPUT_ERROR;
  };

  return (
    <div className="flex flex-col min-w-0 flex-1">
      {/* Date Filters Header - Government Standard */}
      <div className="mb-4">
        <label className={FILTER_STYLES.MAIN_LABEL}>
          <svg
            className="w-5 h-5 mr-3 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={ICON_PATHS.CALENDAR}
            />
          </svg>
          Date Filtering Options
        </label>
        <p className="text-sm text-gray-600 mt-2 font-medium">
          Select data by specific date or date range. Both options can be used simultaneously.
        </p>
      </div>

      {/* Date Filters Container */}
      <div className={FILTER_STYLES.FILTER_SECTION_BG}>
        
        {/* Specific Date Filter Section - Government Standard */}
        <div className="border-b border-gray-300 pb-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <label
                htmlFor="specific-date-input"
                className={FILTER_STYLES.SUB_LABEL}
              >
                Option 1: Filter by Specific Date
              </label>
              <p className="text-xs text-gray-600 mt-1 font-medium">
                Select a single date to view data for that specific day only.
              </p>
            </div>
            {selectedDate && (
              <button
                onClick={handleClearSpecificDate}
                className={FILTER_STYLES.SMALL_CLEAR_BUTTON}
                title="Clear specific date filter"
                type="button"
                aria-label="Clear specific date filter"
              >
                Clear Date
              </button>
            )}
          </div>

          <div className="space-y-2">
            <input
              id="specific-date-input"
              type="date"
              value={selectedDate}
              onChange={handleSpecificDateChange}
              className={getDateInputClass(true)}
              aria-label="Select specific date for data filtering"
              aria-describedby="specific-date-help"
            />
            <p id="specific-date-help" className="text-xs text-gray-500 font-medium">
              Format: MM/DD/YYYY. Use calendar picker or type date directly.
            </p>
          </div>
        </div>

        {/* Date Range Filter Section - Government Standard */}
        <div className="pb-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <label className={FILTER_STYLES.SUB_LABEL}>
                Option 2: Filter by Date Range
              </label>
              <p className="text-xs text-gray-600 mt-1 font-medium">
                Select a start and end date to view data for a specific time period.
              </p>
            </div>
            {(startDate || endDate) && (
              <button
                onClick={handleClearDateRange}
                className={FILTER_STYLES.SMALL_CLEAR_BUTTON}
                title="Clear date range filter"
                type="button"
                aria-label="Clear date range filter"
              >
                Clear Range
              </button>
            )}
          </div>

          {/* Date Range Inputs Grid */}
          <div className={FILTER_STYLES.TWO_COLUMN_GRID}>
            <div className="space-y-2">
              <label
                htmlFor="start-date-input"
                className={FILTER_STYLES.SMALL_LABEL}
              >
                Start Date
              </label>
              <input
                id="start-date-input"
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className={getDateInputClass(isDateRangeValid)}
                aria-label="Select start date for range filtering"
                aria-describedby="start-date-help"
              />
              <p id="start-date-help" className="text-xs text-gray-500 font-medium">
                Beginning of date range
              </p>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="end-date-input"
                className={FILTER_STYLES.SMALL_LABEL}
              >
                End Date
              </label>
              <input
                id="end-date-input"
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                className={getDateInputClass(isDateRangeValid)}
                aria-label="Select end date for range filtering"
                aria-describedby="end-date-help"
              />
              <p id="end-date-help" className="text-xs text-gray-500 font-medium">
                End of date range
              </p>
            </div>
          </div>
          
          {/* Date Range Validation Error - Government Standard */}
          {!isDateRangeValid && (
            <div className={FILTER_STYLES.ERROR_BOX_BG + " mt-4"}>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={ICON_PATHS.WARNING}
                  />
                </svg>
                <div>
                  <p className="font-bold text-red-800">Invalid Date Range</p>
                  <p className="text-red-700 mt-1">
                    The start date must be before or equal to the end date.
                    Please correct your date selection.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filter Logic Information - Government Standard */}
        <div className={FILTER_STYLES.INFO_BOX_BG}>
          <div className="flex items-start">
            <svg
              className="w-5 h-5 mr-3 mt-0.5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={ICON_PATHS.INFO}
              />
            </svg>
            <div>
              <p className="font-bold text-blue-800 mb-2">How Date Filtering Works</p>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• <strong>Specific Date:</strong> Shows data for exactly that date</li>
                <li>• <strong>Date Range:</strong> Shows data between start and end dates (inclusive)</li>
                <li>• <strong>Both Selected:</strong> Shows data that matches either condition</li>
                <li>• <strong>Neither Selected:</strong> Shows all available data</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DateFilters;
