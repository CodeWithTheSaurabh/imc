/**
 * Constants for filter components and styling
 * This file contains all the reusable constants used across filter components
 * to maintain consistency and make styling changes easier.
 */

// CSS Classes for consistent styling across filter components - Government Standard
export const FILTER_STYLES = {
  // Container styles - Professional government interface
  MAIN_CONTAINER: `bg-white border-2 border-gray-300 shadow-sm p-8 mb-8
                   rounded-lg font-sans`,

  HEADER_CONTAINER: "flex items-center mb-6 pb-4 border-b-2 border-gray-200",

  CONTENT_CONTAINER: `flex flex-col xl:flex-row gap-8 items-start xl:items-end
                      justify-between`,

  FILTERS_ROW: "flex flex-col lg:flex-row gap-8 flex-1",

  // Icon styles - Government standard blue
  HEADER_ICON: `flex items-center justify-center w-10 h-10
                bg-blue-600 rounded-md mr-4 shadow-sm`,

  ICON_SVG: "w-5 h-5 text-white",

  // Label styles - Clear hierarchy and accessibility
  MAIN_LABEL: `text-base font-bold text-gray-800 mb-4 flex items-center
               tracking-wide uppercase letter-spacing-wide`,

  SUB_LABEL: `text-sm font-semibold text-gray-700 mb-2
              tracking-wide`,

  SMALL_LABEL: `text-xs font-medium text-gray-600 mb-2 block
                uppercase tracking-wider`,

  REQUIRED_INDICATOR: "text-red-600 ml-1 font-bold",

  // Input styles - Government form standards
  DATE_INPUT: `w-full border-2 border-gray-400 rounded-md px-4 py-3 bg-white
               text-base font-medium text-gray-800
               focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-600
               transition-all duration-200 shadow-sm hover:border-gray-500
               placeholder-gray-500`,

  DATE_INPUT_ERROR: `w-full border-2 border-red-500 rounded-md px-4 py-3 bg-red-50
                     text-base font-medium text-gray-800
                     focus:outline-none focus:ring-3 focus:ring-red-500 focus:border-red-600
                     transition-all duration-200 shadow-sm
                     placeholder-red-400`,
  
  SELECT_INPUT: `border-2 border-gray-400 rounded-md px-4 py-3 bg-white
                 text-base font-medium text-gray-800
                 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-blue-600
                 transition-all duration-200 shadow-sm hover:border-gray-500
                 appearance-none cursor-pointer w-full`,

  // Button styles - Government standard
  PRIMARY_BUTTON: `bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                   text-white font-bold py-3 px-8 rounded-md shadow-sm
                   transition-all duration-200 flex items-center gap-3
                   border-2 border-blue-600 hover:border-blue-700
                   focus:outline-none focus:ring-3 focus:ring-blue-500
                   text-base tracking-wide`,

  SECONDARY_BUTTON: `bg-white hover:bg-gray-50 active:bg-gray-100
                     text-gray-700 hover:text-gray-800 font-bold py-3 px-8
                     rounded-md shadow-sm transition-all duration-200
                     flex items-center gap-3
                     border-2 border-gray-400 hover:border-gray-500
                     focus:outline-none focus:ring-3 focus:ring-gray-500
                     text-base tracking-wide`,

  CLEAR_BUTTON: `bg-red-600 hover:bg-red-700 active:bg-red-800
                 text-white font-bold py-3 px-8 rounded-md shadow-sm
                 transition-all duration-200 flex items-center gap-3
                 border-2 border-red-600 hover:border-red-700
                 focus:outline-none focus:ring-3 focus:ring-red-500
                 text-base tracking-wide`,

  SMALL_CLEAR_BUTTON: `text-sm text-red-600 hover:text-red-800 font-semibold
                       underline hover:no-underline transition-all duration-200`,
  
  // Container backgrounds - Government standard
  FILTER_SECTION_BG: `bg-gray-50 border border-gray-300 rounded-md p-6 space-y-6
                      shadow-inner`,

  INFO_BOX_BG: `text-sm text-blue-800 bg-blue-50 border-2 border-blue-300
                rounded-md p-4 font-medium`,

  ACTIVE_FILTERS_BG: `mt-8 p-6 bg-blue-50 border-2 border-blue-300
                      rounded-md shadow-sm`,

  WARNING_BOX_BG: `text-sm text-amber-800 bg-amber-50 border-2 border-amber-300
                   rounded-md p-4 font-medium`,

  ERROR_BOX_BG: `text-sm text-red-800 bg-red-50 border-2 border-red-300
                 rounded-md p-4 font-medium`,

  // Grid layouts - Government standard spacing
  TWO_COLUMN_GRID: "grid grid-cols-1 md:grid-cols-2 gap-6",
  THREE_COLUMN_GRID: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  ACTIONS_FLEX: "flex flex-col sm:flex-row gap-4 justify-end",
  FILTER_TAGS_FLEX: "flex flex-wrap gap-3",
};

// Filter tag color schemes for active filters display - Government standard
export const FILTER_TAG_COLORS = {
  SPECIFIC_DATE: {
    container: `inline-flex items-center px-4 py-2 rounded-md text-sm font-bold
                bg-green-100 text-green-800 border-2 border-green-300 shadow-sm`,
    icon: "w-4 h-4 mr-2"
  },
  DATE_RANGE: {
    container: `inline-flex items-center px-4 py-2 rounded-md text-sm font-bold
                bg-purple-100 text-purple-800 border-2 border-purple-300 shadow-sm`,
    icon: "w-4 h-4 mr-2"
  },
  ZONE: {
    container: `inline-flex items-center px-4 py-2 rounded-md text-sm font-bold
                bg-blue-100 text-blue-800 border-2 border-blue-300 shadow-sm`,
    icon: "w-4 h-4 mr-2"
  },
  TRIP_COUNT: {
    container: `inline-flex items-center px-4 py-2 rounded-md text-sm font-bold
                bg-orange-100 text-orange-800 border-2 border-orange-300 shadow-sm`,
    icon: "w-4 h-4 mr-2"
  },
  OR_LOGIC: {
    container: `inline-flex items-center px-3 py-1.5 rounded-md text-xs font-bold
                bg-yellow-100 text-yellow-800 border-2 border-yellow-300 shadow-sm
                uppercase tracking-wider`,
    icon: "w-3 h-3 mr-1"
  }
};

// Trip count filter options
export const TRIP_COUNT_OPTIONS = [
  { value: 'all', label: 'All (<3 trips)' },
  { value: '0', label: '0 Trips Only' },
  { value: '1', label: '1 Trip Only' },
  { value: '2', label: '2 Trips Only' }
];

// Error messages for validation
export const ERROR_MESSAGES = {
  INVALID_DATE_RANGE: "Start date must be before or equal to end date",
  REQUIRED_FIELD: "This field is required",
  INVALID_DATE_FORMAT: "Please enter a valid date"
};

// Filter configuration
export const FILTER_CONFIG = {
  // Maximum number of zones to display before showing "Show more" option
  MAX_VISIBLE_ZONES: 20,
  
  // Date format for display
  DATE_DISPLAY_FORMAT: 'MM/dd/yyyy',
  
  // Default filter values
  DEFAULTS: {
    SELECTED_DATE: '',
    START_DATE: '',
    END_DATE: '',
    SELECTED_ZONE: '',
    TRIP_COUNT_FILTER: 'all'
  }
};

// Icon SVG paths for reuse across components
export const ICON_PATHS = {
  CALENDAR: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  LOCATION: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  LOCATION_PIN: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  FILTER: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
  REFRESH: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  CLOSE: "M6 18L18 6M6 6l12 12",
  CHECK: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  INFO: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  WARNING: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  CHEVRON_DOWN: "M19 9l-7 7-7-7"
};
