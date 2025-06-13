/**
 * ActiveFiltersDisplay Component
 * 
 * Displays currently active filters as colored tags with clear visual indicators.
 * Shows different colors for different filter types and includes OR logic indicator.
 * 
 * Features:
 * - Color-coded filter tags (green for specific date, purple for range, blue for zone)
 * - OR logic indicator when both date filter types are active
 * - Formatted date display
 * - Conditional rendering based on active filters
 */

import React from 'react';
import { 
  FILTER_STYLES, 
  FILTER_TAG_COLORS, 
  ICON_PATHS 
} from '../../constants/filterConstants';
import { 
  hasAnyActiveFilters, 
  hasSpecificDateFilter, 
  hasDateRangeFilter, 
  hasBothDateFilters,
  formatDateForDisplay 
} from '../../utils/filterValidation';

/**
 * ActiveFiltersDisplay component for showing active filter tags
 * @param {Object} props - Component props
 * @param {string} props.selectedDate - Currently selected specific date
 * @param {string} props.startDate - Currently selected start date for range
 * @param {string} props.endDate - Currently selected end date for range
 * @param {string} props.selectedZone - Currently selected zone
 * @param {string} props.tripCountFilter - Currently selected trip count filter
 * @param {boolean} props.showTripCountFilter - Whether trip count filter is enabled
 */
const ActiveFiltersDisplay = ({
  selectedDate,
  startDate,
  endDate,
  selectedZone,
  tripCountFilter,
  showTripCountFilter = false
}) => {
  // Check if any filters are active
  const hasActiveFilters = hasAnyActiveFilters({
    selectedDate,
    startDate,
    endDate,
    selectedZone,
    tripCountFilter,
    showTripCountFilter
  });

  // Don't render if no active filters
  if (!hasActiveFilters) {
    return null;
  }

  /**
   * Renders the specific date filter tag
   * @returns {JSX.Element|null} Specific date tag or null
   */
  const renderSpecificDateTag = () => {
    if (!hasSpecificDateFilter(selectedDate)) {
      return null;
    }

    return (
      <span className={FILTER_TAG_COLORS.SPECIFIC_DATE.container}>
        <svg 
          className={FILTER_TAG_COLORS.SPECIFIC_DATE.icon} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={ICON_PATHS.CALENDAR} 
          />
        </svg>
        Specific: {formatDateForDisplay(selectedDate)}
      </span>
    );
  };

  /**
   * Renders the date range filter tag
   * @returns {JSX.Element|null} Date range tag or null
   */
  const renderDateRangeTag = () => {
    if (!hasDateRangeFilter(startDate, endDate)) {
      return null;
    }

    const formattedStartDate = formatDateForDisplay(startDate);
    const formattedEndDate = formatDateForDisplay(endDate);

    return (
      <span className={FILTER_TAG_COLORS.DATE_RANGE.container}>
        <svg 
          className={FILTER_TAG_COLORS.DATE_RANGE.icon} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={ICON_PATHS.CALENDAR} 
          />
        </svg>
        Range: {formattedStartDate} - {formattedEndDate}
      </span>
    );
  };

  /**
   * Renders the zone filter tag
   * @returns {JSX.Element|null} Zone tag or null
   */
  const renderZoneTag = () => {
    if (!selectedZone) {
      return null;
    }

    return (
      <span className={FILTER_TAG_COLORS.ZONE.container}>
        <svg 
          className={FILTER_TAG_COLORS.ZONE.icon} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={ICON_PATHS.LOCATION} 
          />
        </svg>
        Zone: {selectedZone}
      </span>
    );
  };

  /**
   * Renders the OR logic indicator when both date filter types are active
   * @returns {JSX.Element|null} OR logic tag or null
   */
  const renderOrLogicTag = () => {
    if (!hasBothDateFilters(selectedDate, startDate, endDate)) {
      return null;
    }

    return (
      <span className={FILTER_TAG_COLORS.OR_LOGIC.container}>
        <svg 
          className={FILTER_TAG_COLORS.OR_LOGIC.icon} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={ICON_PATHS.INFO} 
          />
        </svg>
        OR Logic Active
      </span>
    );
  };

  return (
    <div className={FILTER_STYLES.ACTIVE_FILTERS_BG}>
      {/* Active Filters Header - Government Standard */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-blue-600 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={ICON_PATHS.CHECK}
            />
          </svg>
          <div>
            <h4 className="text-base font-bold text-blue-800 uppercase tracking-wider">
              Currently Applied Filters
            </h4>
            <p className="text-sm text-blue-700 mt-1 font-medium">
              The following filters are actively modifying the displayed data
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tags Container */}
      <div className={FILTER_STYLES.FILTER_TAGS_FLEX}>
        {renderSpecificDateTag()}
        {renderDateRangeTag()}
        {renderZoneTag()}
        {renderOrLogicTag()}
      </div>

      {/* Filter Summary */}
      <div className="mt-4 pt-4 border-t-2 border-blue-200">
        <p className="text-sm text-blue-700 font-medium">
          <strong>Data View:</strong> Charts and tables below reflect only the data matching these filter criteria.
          Remove filters to view complete dataset.
        </p>
      </div>
    </div>
  );
};

export default ActiveFiltersDisplay;
