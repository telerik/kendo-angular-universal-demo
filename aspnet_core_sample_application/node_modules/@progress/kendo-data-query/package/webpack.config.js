const commonTasks = require('@telerik/kendo-common-tasks');
const path = require('path');

const sourceExtensions = [ '.ts' ];
const nodeModulesPath = path.join(__dirname, 'node_modules');

const resolve = commonTasks.resolveConfig(sourceExtensions, nodeModulesPath);

const packageInfo = require(path.join(process.cwd(), 'package.json'));
const packageKeys = (key) => Object.keys(packageInfo[key] || {});

const matchStartsWith = (key) => new RegExp(`^${key}`);
const deps = packageKeys('dependencies').concat(packageKeys('peerDependencies'));
const packageDependencies = deps.map(matchStartsWith);
const cdnPackageDependencies = deps
    .filter(dep => dep.indexOf('@progress') == -1)
    .filter(dep => dep.indexOf('@telerik') == -1)
    .map(matchStartsWith);

const tsLoader = {
    test: /\.ts?$/,
    exclude: /(node_modules)/,
    loader: require.resolve('ts-loader'),
    query: {
        compilerOptions: {
            sourceMap: true
        }
    }
};

const jsonLoader = {
    test: /\.json$/i,
    loader: require.resolve('json-loader')
};

module.exports = {
    npmPackage: {
        resolve,

        output: { libraryTarget: 'commonjs' },

        externals: [
            /^\.\//,
            /^\.\.\//
        ].concat(packageDependencies),

        module: {
            loaders: [ tsLoader ],
            preLoaders: [ jsonLoader ]
        },

        devtool: 'source-map'
    },

    CDN: commonTasks.webpackThemeConfig({ extract: true }, {
        resolve,

        output: { libraryTarget: 'umd' },

        plugins: [
            commonTasks.uglifyJsPlugin()
        ],

        externals: cdnPackageDependencies,

        module: {
            loaders: [ tsLoader ],
            preLoaders: [ jsonLoader ]
        }
    }),

    dev: commonTasks.webpackDevConfig({
        resolve,
        loaders: [ tsLoader ],
        preLoaders: [ jsonLoader ],
        entries: 'examples/*.ts'
    })
};
