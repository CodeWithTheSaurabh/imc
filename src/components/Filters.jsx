import React from 'react';
import DateFilters from './filters/DateFilters';
import ZoneFilter from './filters/ZoneFilter';
import TripCountFilter from './filters/TripCountFilter';
import FilterActions from './filters/FilterActions';
import ActiveFiltersDisplay from './filters/ActiveFiltersDisplay';
import { validateDateRange, hasAnyActiveFilters } from '../utils/filterValidation';
import { FILTER_STYLES } from '../constants/filterConstants';

/**
 * Main Filters Component
 *
 * Orchestrates all filter sub-components and manages the overall filter state.
 * This component has been refactored to use smaller, focused sub-components
 * for better maintainability and code organization.
 *
 * Features:
 * - Date filtering (specific date and date range with OR logic)
 * - Zone filtering
 * - Trip count filtering (conditional)
 * - Filter actions (refresh, clear all)
 * - Active filters display
 */
const Filters = ({
  selectedDate,
  setSelectedDate,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  selectedZone,
  setSelectedZone,
  availableZones,
  tripCountFilter,
  setTripCountFilter,
  showTripCountFilter = false,
  onRefresh
}) => {
  // Calculate if there are any active filters
  const hasActiveFilters = hasAnyActiveFilters({
    selectedDate,
    startDate,
    endDate,
    selectedZone,
    tripCountFilter,
    showTripCountFilter
  });

  /**
   * Handles clearing all filters at once
   */
  const handleClearAllFilters = () => {
    setSelectedDate('');
    setStartDate('');
    setEndDate('');
    setSelectedZone('');
    if (showTripCountFilter && setTripCountFilter) {
      setTripCountFilter('all');
    }
  };

  return (
    <div className={FILTER_STYLES.MAIN_CONTAINER}>
      {/* Filters Header - Government Standard */}
      <div className={FILTER_STYLES.HEADER_CONTAINER}>
        <div className={FILTER_STYLES.HEADER_ICON}>
          <svg
            className={FILTER_STYLES.ICON_SVG}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider">
            Data Filtering & Control Panel
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-medium">
            Use the options below to filter and refine the vehicle report data displayed in charts and tables.
            All filters can be used independently or in combination.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className={FILTER_STYLES.CONTENT_CONTAINER}>

        {/* Filters Row */}
        <div className={FILTER_STYLES.FILTERS_ROW}>

          {/* Date Filters Component */}
          <DateFilters
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />

          {/* Zone Filter Component */}
          <ZoneFilter
            selectedZone={selectedZone}
            setSelectedZone={setSelectedZone}
            availableZones={availableZones}
          />

          {/* Trip Count Filter Component (conditional) */}
          <TripCountFilter
            tripCountFilter={tripCountFilter}
            setTripCountFilter={setTripCountFilter}
            showTripCountFilter={showTripCountFilter}
          />

        </div>

        {/* Filter Actions */}
        <FilterActions
          onRefresh={onRefresh}
          onClearAll={handleClearAllFilters}
          hasActiveFilters={hasActiveFilters}
        />

      </div>

      {/* Active Filters Display */}
      <ActiveFiltersDisplay
        selectedDate={selectedDate}
        startDate={startDate}
        endDate={endDate}
        selectedZone={selectedZone}
        tripCountFilter={tripCountFilter}
        showTripCountFilter={showTripCountFilter}
      />

    </div>
  );
};

export default Filters;
