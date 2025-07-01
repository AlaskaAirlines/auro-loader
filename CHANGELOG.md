# Semantic Release Automated Changelog

# [5.1.0](https://github.com/AlaskaAirlines/auro-loader/compare/v5.0.0...v5.1.0) (2025-07-01)


### Bug Fixes

* update docs head content ([2e6ad7f](https://github.com/AlaskaAirlines/auro-loader/commit/2e6ad7fd4b424439fb2adafdae547be61c9eda33))


### Features

* add themeable type classes ([b39308b](https://github.com/AlaskaAirlines/auro-loader/commit/b39308bd1f3354d82d6d31d3fd23f357ef12e5d4))

# [5.0.0](https://github.com/AlaskaAirlines/auro-loader/compare/v4.0.0...v5.0.0) (2025-04-07)


### Performance Improvements

* update component to use newly released theming tokens [#58](https://github.com/AlaskaAirlines/auro-loader/issues/58) ([1e6cf61](https://github.com/AlaskaAirlines/auro-loader/commit/1e6cf613477af29f3d38b37cd5fa25082a6531d2))
* update dependencies and tsconfig ([5d8c4f9](https://github.com/AlaskaAirlines/auro-loader/commit/5d8c4f98e6f9cdde15014be43a8880a01ab98b75))


### BREAKING CHANGES

* The `white` attribute has been removed.

# [4.0.0](https://github.com/AlaskaAirlines/auro-loader/compare/v3.1.4...v4.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([8980093](https://github.com/AlaskaAirlines/auro-loader/commit/898009341d1bb99f5aeaffd7a20f96788b855ef6))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [3.1.4](https://github.com/AlaskaAirlines/auro-loader/compare/v3.1.3...v3.1.4) (2025-02-08)


### Performance Improvements

* update dependencies ([da8021e](https://github.com/AlaskaAirlines/auro-loader/commit/da8021eaa0937f728c24a1006d75b344a0babd22))
* update package-lock error ([857fb7e](https://github.com/AlaskaAirlines/auro-loader/commit/857fb7e9d08d79cfa653d6008b6ccd9f152cd881))

## [3.1.3](https://github.com/AlaskaAirlines/auro-loader/compare/v3.1.2...v3.1.3) (2024-12-21)


### Performance Improvements

* update node to version 22 ([c5298af](https://github.com/AlaskaAirlines/auro-loader/commit/c5298af786bcb95e6c4e6efcecc7e83669a2d297))

## [3.1.2](https://github.com/AlaskaAirlines/auro-loader/compare/v3.1.1...v3.1.2) (2024-11-21)


### Bug Fixes

* update markdown partial pathing to consume new auro lib [#48](https://github.com/AlaskaAirlines/auro-loader/issues/48) ([075a82b](https://github.com/AlaskaAirlines/auro-loader/commit/075a82b306c7e95d1d5fa4295f501c6f407587c6))


### Performance Improvements

* update library to 3.0.2 ([7eb49af](https://github.com/AlaskaAirlines/auro-loader/commit/7eb49af297236c151fb027b864d6ad7f27bf887b))

## [3.1.1](https://github.com/AlaskaAirlines/auro-loader/compare/v3.1.0...v3.1.1) (2024-10-30)


### Bug Fixes

* add package.lock ([9a745dc](https://github.com/AlaskaAirlines/auro-loader/commit/9a745dcb81b3715f9b5f51a0e133b51e8f466916))
* limit auro-library version to patch updates ([06041c1](https://github.com/AlaskaAirlines/auro-loader/commit/06041c13920864770fbdda8f604d8eafc2c51ea2))
* rollback auro-library to fix generateDoc scripting ([d71c779](https://github.com/AlaskaAirlines/auro-loader/commit/d71c779099e5736a3e6c08d7fa30b1cd5839a519))

# [3.1.0](https://github.com/AlaskaAirlines/auro-loader/compare/v3.0.1...v3.1.0) (2024-10-23)


### Features

* **api:** add register static method [#44](https://github.com/AlaskaAirlines/auro-loader/issues/44) ([d5e5e65](https://github.com/AlaskaAirlines/auro-loader/commit/d5e5e65ddfc94e04e365413906042a1a99fe57fe))


### Performance Improvements

* update dependency versions ([73c34e8](https://github.com/AlaskaAirlines/auro-loader/commit/73c34e8c16247eedfa3376c4a7799cebcc92c4df))

## [3.0.1](https://github.com/AlaskaAirlines/auro-loader/compare/v3.0.0...v3.0.1) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#42](https://github.com/AlaskaAirlines/auro-loader/issues/42) ([e280256](https://github.com/AlaskaAirlines/auro-loader/commit/e28025695c7b3bc79e28ff8d9678e75c23169aea))

# [3.0.0](https://github.com/AlaskaAirlines/auro-loader/compare/v2.1.0...v3.0.0) (2024-09-24)


### Bug Fixes

* update path to component js file ([a30ed95](https://github.com/AlaskaAirlines/auro-loader/commit/a30ed9590298979c3a2bf98d8e3ade47084620c9))


### Performance Improvements

* update dependencies ([8481564](https://github.com/AlaskaAirlines/auro-loader/commit/8481564faf9cf7775e91cdfdd902845871413959))


### BREAKING CHANGES

* trigger major release for theming support #31

# [2.1.0](https://github.com/AlaskaAirlines/auro-loader/compare/v2.0.6...v2.1.0) (2024-09-23)


### Bug Fixes

* **color:** resolve minor color theming issues [#32](https://github.com/AlaskaAirlines/auro-loader/issues/32) ([b4359cc](https://github.com/AlaskaAirlines/auro-loader/commit/b4359cc338a24eeccab24155f833e956f8cd7b34))


### Features

* add function to handle custom name registration ([a9da87a](https://github.com/AlaskaAirlines/auro-loader/commit/a9da87a7d8cbd476c98020eb8f9f6383057e470c))
* refactor color styles to use tier 3 tokens ([c6e6275](https://github.com/AlaskaAirlines/auro-loader/commit/c6e627589c77b7653e191df16be217bd481e7e90))


### Performance Improvements

* point to use shared library scripts for build process ([8946612](https://github.com/AlaskaAirlines/auro-loader/commit/89466121c2689d65037c1093a1dc579f0bd866cd))
* refactor custom component registration config [#34](https://github.com/AlaskaAirlines/auro-loader/issues/34) ([9ca1854](https://github.com/AlaskaAirlines/auro-loader/commit/9ca1854ce579b826f15861418cdf954a5974245c))
* update dependencies ([5235e4f](https://github.com/AlaskaAirlines/auro-loader/commit/5235e4f9cbfda80bf0781a16eed55188b6c87763))

## [2.0.6](https://github.com/AlaskaAirlines/auro-loader/compare/v2.0.5...v2.0.6) (2024-02-21)


### Performance Improvements

* **docs:** update to include custom registration example ([ce100f4](https://github.com/AlaskaAirlines/auro-loader/commit/ce100f4b9a1ebc7aabe40a850fd254781103cd34))

## [2.0.5](https://github.com/AlaskaAirlines/auro-loader/compare/v2.0.4...v2.0.5) (2024-02-18)


### Bug Fixes

* **docs:** fix broken readme build ([55d5aa7](https://github.com/AlaskaAirlines/auro-loader/commit/55d5aa78b2b2f857d5cfb601490a65529b925496))


### Performance Improvements

* **modernize:** rebuild component using generator build [#27](https://github.com/AlaskaAirlines/auro-loader/issues/27) ([37e6929](https://github.com/AlaskaAirlines/auro-loader/commit/37e6929d100b4311cf09189ce7273cdccbeabacb))

## [2.0.4](https://github.com/AlaskaAirlines/auro-loader/compare/v2.0.3...v2.0.4) (2024-02-11)


### Performance Improvements

* update deps and add ESM support badge ([35ed22c](https://github.com/AlaskaAirlines/auro-loader/commit/35ed22cfceff879743724f0f3b0f27be7c49e5ec))

## [2.0.3](https://github.com/AlaskaAirlines/auro-loader/compare/v2.0.2...v2.0.3) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([a7ad5f9](https://github.com/AlaskaAirlines/auro-loader/commit/a7ad5f9bc7eccbe0440b3b8eedf57637c0427921))

## [2.0.2](https://github.com/AlaskaAirlines/auro-loader/compare/v2.0.1...v2.0.2) (2024-01-27)


### Performance Improvements

* update index per SSR support ([bcbfaff](https://github.com/AlaskaAirlines/auro-loader/commit/bcbfaff4fbd18e3e806049c7ad9861efe3a06951))

## [2.0.1](https://github.com/AlaskaAirlines/auro-loader/compare/v2.0.0...v2.0.1) (2024-01-22)


### Performance Improvements

* update dependencies and lit-element refs ([233a22b](https://github.com/AlaskaAirlines/auro-loader/commit/233a22b1d6d77f6dce31a5347533024f04ae52ac))

# [2.0.0](https://github.com/AlaskaAirlines/auro-loader/compare/v1.1.1...v2.0.0) (2024-01-20)


### Documentation

* address all API exampled ([1f12759](https://github.com/AlaskaAirlines/auro-loader/commit/1f12759301c9449a1a6a37482610d23a337ed699))


### Features

* add support for SSR projects ([236e41d](https://github.com/AlaskaAirlines/auro-loader/commit/236e41da33db8e7606a82c26be9a41e7cc2a5842))


### BREAKING CHANGES

* This commit adds all the necessary code examples needed for the API
illustrations.

This commit also removes the code for the unused XL and
XXS variants.

Changes to be committed:
new file:   apiExamples/api_large.html
new file:   apiExamples/api_medium.html
new file:   apiExamples/api_small.html
new file:   apiExamples/api_xs.html
modified:   apiExamples/custom_speed.html
modified:   apiExamples/loaderGallery.html
modified:   apiExamples/loader_sizes.html
new file:   apiExamples/ondark.html
new file:   apiExamples/onlight.html
new file:   apiExamples/property_laser.html
new file:   apiExamples/property_orbit.html
new file:   apiExamples/property_pulse.html
new file:   apiExamples/property_ringworm.html
new file:   apiExamples/white.html
modified:   demo/api.html
modified:   demo/api.md
modified:   demo/demo.md
modified:   docs/api.md
modified:   docs/partials/api.md
modified:   scripts/generateDocs.mjs
modified:   src/auro-loader.js
modified:   src/styles/_base.scss
modified:   src/styles/_orbit.scss

## [1.1.1](https://github.com/AlaskaAirlines/auro-loader/compare/v1.1.0...v1.1.1) (2021-08-03)


### Bug Fixes

* default boolean props to false [#11](https://github.com/AlaskaAirlines/auro-loader/issues/11) ([27c06b6](https://github.com/AlaskaAirlines/auro-loader/commit/27c06b66a3770cf6208a2627ccad4a74ffed58ce))

# [1.1.0](https://github.com/AlaskaAirlines/auro-loader/compare/v1.0.1...v1.1.0) (2021-03-04)


### Features

* add xs and xxs sizes ([4a8887b](https://github.com/AlaskaAirlines/auro-loader/commit/4a8887bb3db8c49ca5bab8e6d2585fbb3e78b3b4))

## [1.0.1](https://github.com/AlaskaAirlines/auro-loader/compare/v1.0.0...v1.0.1) (2021-02-19)


### Bug Fixes

* reflect properties to attributes ([4a73298](https://github.com/AlaskaAirlines/auro-loader/commit/4a73298bdf348a4b0b5e72628256bb9eabd1e716))

# 1.0.0 (2020-12-03)


### Features

* initial build ([99f8f73](https://github.com/AlaskaAirlines/auro-loader/commit/99f8f73f02e201971a9baa4b4435b148a5b7adad))
* manage a11y animations ([8d03dde](https://github.com/AlaskaAirlines/auro-loader/commit/8d03ddea9cc871036e71f84cd248ab43e606796f))
