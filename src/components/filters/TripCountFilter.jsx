/**
 * TripCountFilter Component
 * 
 * Handles trip count filtering for vehicles with less than 3 trips.
 * This filter is conditionally shown based on the showTripCountFilter prop.
 * 
 * Features:
 * - Dropdown selection for different trip count categories
 * - Configurable options from constants
 * - Conditional rendering based on parent component needs
 * - Consistent styling with other filter components
 */

import React from 'react';
import { TRIP_COUNT_OPTIONS } from '../../constants/filterConstants';

/**
 * TripCountFilter component for handling trip count based filtering
 * @param {Object} props - Component props
 * @param {string} props.tripCountFilter - Currently selected trip count filter
 * @param {Function} props.setTripCountFilter - Function to update trip count filter
 * @param {boolean} props.showTripCountFilter - Whether to show this filter component
 */
const TripCountFilter = ({
  tripCountFilter,
  setTripCountFilter,
  showTripCountFilter = false
}) => {
  /**
   * Handles trip count filter change
   * @param {Event} event - Select change event
   */
  const handleTripCountChange = (event) => {
    setTripCountFilter(event.target.value);
  };

  /**
   * Renders the trip count options for the select dropdown
   * @returns {Array<JSX.Element>} Array of option elements
   */
  const renderTripCountOptions = () => {
    return TRIP_COUNT_OPTIONS.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  // Don't render if not enabled
  if (!showTripCountFilter) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {/* Trip Count Filter Header */}
      <label 
        htmlFor="trip-count-select-input" 
        className="text-sm font-medium text-gray-700 mb-1"
      >
        Trip Count Filter
      </label>
      
      {/* Trip Count Select */}
      <select
        id="trip-count-select-input"
        value={tripCountFilter || 'all'}
        onChange={handleTripCountChange}
        className={`
          border border-gray-300 rounded-md px-3 py-2 bg-white 
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          transition-all duration-200
        `}
        aria-label="Select trip count filter"
      >
        {renderTripCountOptions()}
      </select>
      
      {/* Trip Count Filter Information */}
      <div className="mt-1 text-xs text-gray-500">
        Filter vehicles by number of trips completed
      </div>
    </div>
  );
};

export default TripCountFilter;
