/**
 * FilterActions Component
 * 
 * Handles action buttons for filter operations like refresh and clear all.
 * Provides consistent styling and behavior for filter-related actions.
 * 
 * Features:
 * - Refresh data button
 * - Clear all filters button (conditionally shown)
 * - Consistent styling and hover effects
 * - Accessibility support with proper labels
 */

import React from 'react';
import { FILTER_STYLES, ICON_PATHS } from '../../constants/filterConstants';

/**
 * FilterActions component for handling filter action buttons
 * @param {Object} props - Component props
 * @param {Function} props.onRefresh - Function to call when refresh button is clicked
 * @param {Function} props.onClearAll - Function to call when clear all button is clicked
 * @param {boolean} props.hasActiveFilters - Whether there are any active filters
 */
const FilterActions = ({
  onRefresh,
  onClearAll,
  hasActiveFilters = false
}) => {
  /**
   * Handles refresh button click
   */
  const handleRefreshClick = () => {
    if (onRefresh) {
      onRefresh();
    }
  };

  /**
   * Handles clear all button click
   */
  const handleClearAllClick = () => {
    if (onClearAll) {
      onClearAll();
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Actions Header */}
      <div className="text-right">
        <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-2">
          Filter Actions
        </h4>
        <p className="text-xs text-gray-600 font-medium">
          Manage your filter settings and data refresh
        </p>
      </div>

      {/* Action Buttons */}
      <div className={FILTER_STYLES.ACTIONS_FLEX}>
        {/* Refresh Data Button - Government Standard */}
        <button
          onClick={handleRefreshClick}
          className={FILTER_STYLES.PRIMARY_BUTTON}
          title="Refresh data from source - Updates all charts and tables"
          type="button"
          aria-label="Refresh dashboard data from source"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={ICON_PATHS.REFRESH}
            />
          </svg>
          Refresh Data
        </button>

        {/* Clear All Filters Button - Only show if there are active filters */}
        {hasActiveFilters && (
          <button
            onClick={handleClearAllClick}
            className={FILTER_STYLES.CLEAR_BUTTON}
            title="Remove all active filters and show all data"
            type="button"
            aria-label="Clear all active filters and reset to default view"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={ICON_PATHS.CLOSE}
              />
            </svg>
            Clear All Filters
          </button>
        )}
      </div>

      {/* Action Information */}
      <div className="text-right">
        <p className="text-xs text-gray-500 font-medium">
          {hasActiveFilters
            ? "Filters are currently active. Clear to view all data."
            : "No filters active. Showing all available data."
          }
        </p>
      </div>
    </div>
  );
};

export default FilterActions;
