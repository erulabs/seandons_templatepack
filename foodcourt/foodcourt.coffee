'use strict'

require './build/angular.min.js'

app = angular.module 'foodcourt', []

app.controller 'stencilController', ['$scope', ($scope) ->
  manifest = require '../manifest.json'
  # TODO: Better solution for this - browserify needs static paths.
  $scope.stencils = manifest.stencil_sets
  $scope.selectedStencils = {}
  $scope.numStencils = 0
  $scope.manifest_output = false
  $scope.stencilsData = {
    'apache': require '../stencils/apache/manifest.json'
    'application-php': require '../stencils/application-php/manifest.json'
    'application-node': require '../stencils/application-node/manifest.json'
    'drupal': require '../stencils/drupal/manifest.json'
    'elk': require '../stencils/elk/manifest.json'
    'glusterfs': require '../stencils/glusterfs/manifest.json'
    'graphite': require '../stencils/graphite/manifest.json'
    'haproxy': require '../stencils/haproxy/manifest.json'
    'ha-redis': require '../stencils/ha-redis/manifest.json'
    'iojs': require '../stencils/iojs/manifest.json'
    'mariadb': require '../stencils/mariadb/manifest.json'
    'mariadb-galera': require '../stencils/mariadb-galera/manifest.json'
    'memcached': require '../stencils/memcached/manifest.json'
    'newrelic': require '../stencils/newrelic/manifest.json'
    'nginx': require '../stencils/nginx/manifest.json'
    'nodejs': require '../stencils/nodejs/manifest.json'
    'php': require '../stencils/php/manifest.json'
    'rackspace_networks': require '../stencils/rackspace_networks/manifest.json'
    'rails': require '../stencils/rails/manifest.json'
    'redis': require '../stencils/redis/manifest.json'
    'ruby': require '../stencils/ruby/manifest.json'
    'statsd': require '../stencils/statsd/manifest.json'
    'varnish': require '../stencils/varnish/manifest.json'
    'wordpress': require '../stencils/wordpress/manifest.json'
  }
  $scope.base = manifest.base
  $scope.api = manifest.api
  $scope.framework = manifest.framework

  $scope.selectStencil = (name) ->
    $scope.selectedStencils[name] = $scope.stencilsData[name]
    $scope.numStencils++
    $scope.buildManifest()

  $scope.removeStencil = (name) ->
    $scope.selectedStencils[name] = undefined
    delete $scope.selectedStencils[name]
    $scope.numStencils--
    $scope.buildManifest()

  $scope.openStencilOptions = (name) ->
    $scope.selectedStencils[name].open = true

  $scope.closeStencilOptions = (name) ->
    $scope.selectedStencils[name].open = false

  $scope.prettyJson = (input) ->
    return JSON.stringify(input, null, 2)
  $scope.prettyDeps = (input) ->
    return '' if !input?
    return Object.keys(input).join(', ')


  $scope.buildManifest = () ->
    output = {
      name: "My_new_cookbook",
      stencils: []
    }
    for name, stencil of $scope.selectedStencils
      obj = {
        stencil_set: name
      }
      for optName, option of stencil.options
        if option.choice?
          obj[optName] = option.choice

      output.stencils.push obj

    $scope.manifest_output = $scope.prettyJson(output)

]
