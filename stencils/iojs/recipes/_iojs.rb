#
# Cookbook Name:: |{ cookbook['name'] }|
# Recipe :: |{ options['name'] }|
#
# Copyright |{ cookbook['year'] }|, Rackspace
#

['npm', 'node', 'nodejs', 'nodejs-legacy'].each do |node_pkg|
  package node_pkg do
    action :purge
  end
end

# Note that the NodeJS cookbook is included via metadata.
# This means you can make use of the "npm" LWRPs as normal.

default['iojs']['version'] = '1.4.3'
include_recipe 'iojs'
