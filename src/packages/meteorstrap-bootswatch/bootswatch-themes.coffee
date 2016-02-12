fs = Npm.require 'fs'

assetsRoot = "#{__meteor_bootstrap__.serverDir}/assets/packages/tap_meteorstrap-bootswatch/themes"

for themeName in fs.readdirSync assetsRoot
  Meteorstrap.registerPredefinedTheme
    _id: themeName
    name: themeName.charAt(0).toUpperCase() + themeName.slice(1)
    author: 'Bootswatch'
    assetPath: "#{assetsRoot}/#{themeName}"