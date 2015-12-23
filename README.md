
# Atom package Pane Item Control Helper

This package assign any element has class `enable-pane-item-control-helper` a special command to control the pane item which contains that element:
 - `package-pane-item-control-helper:close-if-accepted` for `.enable-pane-item-control-helper.check-before-close`
 - `package-pane-item-control-helper:close` for `.enable-pane-item-control-helper.able-to-be-closed`

## Some packages which supports this package
 - command-executor: ([package](https://atom.io/packages/command-executor) | [repo](https://github.com/ksxatompackages/cmd-exec.git))

*Honestly, there's only one, not 'some' (Forever alone :cry:)*

*So, if you want to list your package here, please request*

## How to supports this package in my package?

### Assigning `package-pane-item-control-helper:close-if-accepted` to an element
 - The element must mark the query above
 - The element must have a method named `getPaneItem` which returns a Pane Item that should be considered to be close
 - The Pane Item which is return value of `element.getPaneItem()` must have a method named `acceptToBeClosed` that returns a `boolean`

### Assigning `package-pane-item-control-helper:close` to an element
 - The element must mark the query above
 - The element must have a method named `getPaneItem` which returns a Pane Item that should be closed
