/*
 * This file is part of INSPIRE.
 * Copyright (C) 2014, 2015, 2016 CERN.
 *
 * INSPIRE is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * INSPIRE is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with INSPIRE. If not, see <http://www.gnu.org/licenses/>.
 *
 * In applying this licence, CERN does not waive the privileges and immunities
 * granted to it by virtue of its status as an Intergovernmental Organization
 * or submit itself to any jurisdiction.

 */

require.config({
  baseUrl: ".",
  paths: {
    angular: 'node_modules/angular/angular',
    "invenio-search-js": 'node_modules/invenio-search-js/dist/invenio-search-js',
    typeahead: 'node_modules/typeahead.js/dist/typeahead.bundle',
    jquery: 'node_modules/jquery/dist/jquery',
    'jquery-caret': 'node_modules/jquery-plugin/dist/jquery.caret-1.5.0',
    'inspirehep-typeahead': '../src/typeahead',
    'default_typeahead_configuration': '../src/default_typeahead_configuration',
    'search_parser': '../src/search_parser',
    'invenio_with_spires_typeahead_configuration': '../src/invenio_with_spires_typeahead_configuration',
    hogan: 'node_modules/hogan.js/web/builds/3.0.2/hogan-3.0.2.amd',
  },
  shim: {
    angular: {
      exports: "angular"
    },
    "invenio-search-js": {
      deps: ["angular"]
    },
    jquery: {
      exports: "$"
    },
    typeahead: {
      deps: ["jquery"],
      exports: "Bloodhound"
    },
    "jquery-caret": {
      deps: ["jquery"],
      exports: "$.fn.caret"
    }
  }
});
