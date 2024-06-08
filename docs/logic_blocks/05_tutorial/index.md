---
title: ⏲️ Timer Tutorial
image: ../header.jpg
---

In this tutorial, we'll use LogicBlocks to create a hierarchical state machine that represents a simple kitchen timer. When we're finished, we'll have code for a state machine that produces the following diagram.

:::tip
The final code for this project is available in the `Chickensoft.LogicBlocks.Tutorial` package at the [LogicBlocks] repository.
:::

```mermaid
stateDiagram-v2
state "Timer State" as Chickensoft_LogicBlocks_Tests_Examples_Timer_State {
  state "PoweredOff" as Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOff
  state "PoweredOn" as Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn {
    state "Idle" as Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Idle
    state "Countdown" as Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Countdown
    state "Beeping" as Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Beeping
  }
}

Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOff --> Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Idle : PowerButtonPressed
Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn --> Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOff : PowerButtonPressed
Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Countdown --> Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Beeping : TimeElapsed
Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Countdown --> Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Countdown : TimeElapsed
Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Countdown --> Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Idle : StartStopButtonPressed
Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Idle --> Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Countdown : StartStopButtonPressed

Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Beeping : OnEnter → PlayBeepingSound
Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOn_Beeping : OnExit → StopBeepingSound

[*] --> Chickensoft_LogicBlocks_Tests_Examples_Timer_State_PoweredOff
```

As you can see, even a simple kitchen timer contains a lot of details.

Because LogicBlocks produces diagrams from our code, we can keep tweaking our code and checking the diagram until it matches our idea of how the state machine should be designed.

[LogicBlocks]: https://github.com/chickensoft-games/LogicBlocks/
