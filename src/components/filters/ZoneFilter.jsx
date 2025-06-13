/**
 * ZoneFilter Component
 * 
 * Handles zone-based filtering with a dropdown selection.
 * Allows users to filter data by specific operational zones.
 * 
 * Features:
 * - Dropdown selection of available zones
 * - "All Zones" option to clear filter
 * - Consistent styling with other filter components
 * - Accessibility support with proper labels
 */

import React from 'react';
import { FILTER_STYLES, ICON_PATHS } from '../../constants/filterConstants';

/**
 * ZoneFilter component for handling zone-based filtering
 * @param {Object} props - Component props
 * @param {string} props.selectedZone - Currently selected zone
 * @param {Function} props.setSelectedZone - Function to update selected zone
 * @param {Array<string>} props.availableZones - Array of available zone options
 */
const ZoneFilter = ({
  selectedZone,
  setSelectedZone,
  availableZones = []
}) => {
  /**
   * Handles zone selection change
   * @param {Event} event - Select change event
   */
  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
  };

  /**
   * Renders the zone options for the select dropdown
   * @returns {Array<JSX.Element>} Array of option elements
   */
  const renderZoneOptions = () => {
    return availableZones.map((zone) => (
      <option key={zone} value={zone}>
        Zone {zone}
      </option>
    ));
  };

  return (
    <div className="flex flex-col min-w-0 flex-1">
      {/* Zone Filter Header - Government Standard */}
      <div className="mb-4">
        <label
          htmlFor="zone-select-input"
          className={FILTER_STYLES.MAIN_LABEL}
        >
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
              d={ICON_PATHS.LOCATION}
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={ICON_PATHS.LOCATION_PIN}
            />
          </svg>
          Geographic Zone Selection
        </label>
        <p className="text-sm text-gray-600 mt-2 font-medium">
          Filter data by operational zone or view all zones combined.
        </p>
      </div>

      {/* Zone Select Container */}
      <div className={FILTER_STYLES.FILTER_SECTION_BG}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="zone-select-input"
              className={FILTER_STYLES.SUB_LABEL}
            >
              Select Operational Zone
            </label>
            <p className="text-xs text-gray-600 mt-1 mb-3 font-medium">
              Choose a specific zone to filter data, or select "All Zones" to view combined data.
            </p>
          </div>

          <div className="relative">
            <select
              id="zone-select-input"
              value={selectedZone}
              onChange={handleZoneChange}
              className={FILTER_STYLES.SELECT_INPUT}
              aria-label="Select operational zone for data filtering"
              aria-describedby="zone-help"
            >
              {/* Default "All Zones" option */}
              <option value="">All Zones (No Filter)</option>

              {/* Dynamic zone options */}
              {renderZoneOptions()}
            </select>

            {/* Dropdown Arrow Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={ICON_PATHS.CHEVRON_DOWN}
                />
              </svg>
            </div>
          </div>

          <p id="zone-help" className="text-xs text-gray-500 font-medium">
            {availableZones.length} zone(s) available for selection
          </p>
        </div>

        {/* Zone Filter Status Information */}
        {availableZones.length === 0 && (
          <div className={FILTER_STYLES.WARNING_BOX_BG + " mt-4"}>
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mr-3 mt-0.5 text-amber-600"
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
                <p className="font-bold text-amber-800">No Zones Available</p>
                <p className="text-amber-700 mt-1">
                  Zone data is currently loading or unavailable. Please refresh the page or contact support.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedZone && (
          <div className={FILTER_STYLES.INFO_BOX_BG + " mt-4"}>
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
                  d={ICON_PATHS.CHECK}
                />
              </svg>
              <div>
                <p className="font-bold text-blue-800">Zone Filter Active</p>
                <p className="text-blue-700 mt-1">
                  Currently displaying data for Zone {selectedZone} only.
                  Select "All Zones" to view combined data.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZoneFilter;
