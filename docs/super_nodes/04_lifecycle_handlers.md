---
title: 🔄 Lifecycle Handlers
slug: lifecycle-handlers
image: ./header.jpg
---

SuperNodes allows you to implement methods that correspond to Godot node and object notifications, such as `OnReady` for `NotificationReady`, or `OnProcess` in place of `NotificationProcess`.

Likewise, there is a special `OnNotification(int what)` method that can be called any time a notification is received. Since SuperNodes has to implement `_Notification(int what)` itself, this is the only way to receive ever notification at once in your script.

The following list contains every possible lifecycle handlers you can implement in your SuperNode. Each one corresponds to a `Notification` type found in `Godot.Node` or `Godot.Object`.

If Godot's notifications are updated or renamed, new versions of SuperNodes can be released that adapt accordingly.

Note that `OnProcess` and `OnPhysicsProcess` are special cases that each have a single `double delta` parameter that is supplied by `GetProcessDeltaTime()` and `GetPhysicsProcessDeltaTime()`, respectively.

- **`Godot.Object` Notifications**
  - `OnPostinitialize` = `NotificationPostinitialize`
  - `OnPredelete` = `NotificationPredelete`
- **`Godot.Node` Notifications**
  - `OnNotification(what)` = `override void _Notification(what)`
  - `OnEnterTree` = `NotificationEnterTree`
  - `OnWmWindowFocusIn` = `NotificationWmWindowFocusIn`
  - `OnWmWindowFocusOut` = `NotificationWmWindowFocusOut`
  - `OnWmCloseRequest` = `NotificationWmCloseRequest`
  - `OnWmSizeChanged` = `NotificationWmSizeChanged`
  - `OnWmDpiChange` = `NotificationWmDpiChange`
  - `OnVpMouseEnter` = `NotificationVpMouseEnter`
  - `OnVpMouseExit` = `NotificationVpMouseExit`
  - `OnOsMemoryWarning` = `NotificationOsMemoryWarning`
  - `OnTranslationChanged` = `NotificationTranslationChanged`
  - `OnWmAbout` = `NotificationWmAbout`
  - `OnCrash` = `NotificationCrash`
  - `OnOsImeUpdate` = `NotificationOsImeUpdate`
  - `OnApplicationResumed` = `NotificationApplicationResumed`
  - `OnApplicationPaused` = `NotificationApplicationPaused`
  - `OnApplicationFocusIn` = `NotificationApplicationFocusIn`
  - `OnApplicationFocusOut` = `NotificationApplicationFocusOut`
  - `OnTextServerChanged` = `NotificationTextServerChanged`
  - `OnWmMouseExit` = `NotificationWmMouseExit`
  - `OnWmMouseEnter` = `NotificationWmMouseEnter`
  - `OnWmGoBackRequest` = `NotificationWmGoBackRequest`
  - `OnEditorPreSave` = `NotificationEditorPreSave`
  - `OnExitTree` = `NotificationExitTree`
  - `OnMovedInParent` = `NotificationMovedInParent`
  - `OnReady` = `NotificationReady`
  - `OnEditorPostSave` = `NotificationEditorPostSave`
  - `OnUnpaused` = `NotificationUnpaused`
  - `OnPhysicsProcess(double delta)` = `NotificationPhysicsProcess`
  - `OnProcess(double delta)` = `NotificationProcess`
  - `OnParented` = `NotificationParented`
  - `OnUnparented` = `NotificationUnparented`
  - `OnPaused` = `NotificationPaused`
  - `OnDragBegin` = `NotificationDragBegin`
  - `OnDragEnd` = `NotificationDragEnd`
  - `OnPathRenamed` = `NotificationPathRenamed`
  - `OnInternalProcess` = `NotificationInternalProcess`
  - `OnInternalPhysicsProcess` = `NotificationInternalPhysicsProcess`
  - `OnPostEnterTree` = `NotificationPostEnterTree`
  - `OnDisabled` = `NotificationDisabled`
  - `OnEnabled` = `NotificationEnabled`
  - `OnSceneInstantiated` = `NotificationSceneInstantiated`
