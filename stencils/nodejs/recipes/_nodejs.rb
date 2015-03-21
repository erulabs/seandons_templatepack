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

node_version = |{ qstring(options['node_version']) }|
npm_version = |{ qstring(options['npm_version']) }|

# MD5 Checksum of http://nodejs.org/dist/v|{ options['node_version'] }|/node-v|{ options['node_version'] }|-linux-x64.tar.gz
# (for example) or /var/chef/cache/nodejs-binary-|{ options['node_version'] }|.tar.gz on node
node.override['nodejs']['version'] = node_version
node.override['nodejs']['binary']['checksum'] = |{ qstring(options['node_checksum']) }|
# If you're using Rackspace's nodestack, you'll want to override the node version:
node.override['nodestack']['binary_path'] = "/usr/local/nodejs-binary-#{node_version}/bin/node"

include_recipe 'nodejs::nodejs_from_binary'

# Remove symlink if we need to install a new npm
file '/usr/local/bin/npm' do
  action :delete
  not_if "if [ `/usr/local/bin/npm -v` == '#{npm_version}' ]; then true; fi"
end

execute 'Modern NPM' do
  command "/usr/local/nodejs-binary-#{node['nodejs']['version']}/bin/npm \
install -g npm@#{npm_version}"
  not_if "if [ `/usr/local/bin/npm -v` == '#{npm_version}' ]; then true; fi"
end
