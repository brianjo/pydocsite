# ENGINE

### *CLASS*`ignite.engine.engine.Engine(`*`process_function`*`)`

Runs a given `process_function` over each batch of a dataset, emitting events as it goes.
Parameters

**process_function** (*Callable[[*[*Engine*](https://pytorch.org/ignite/generated/ignite.engine.engine.Engine.html#ignite.engine.engine.Engine)*, Any], Any]*) – A function receiving a handle to the engine and the current batch in each iteration, and returns data to be stored in the engine’s state.

`state`
object that is used to pass internal and user-defined state between event handlers. It is created with the engine and its attributes (e.g. `state.iteration`, `state.epoch` etc) are reset on every [`run()`](https://pytorch.org/ignite/generated/ignite.engine.engine.Engine.html#ignite.engine.engine.Engine.run).

`last_event_name`
last event name triggered by the engine.

NOTE
[`Engine`](https://pytorch.org/ignite/generated/ignite.engine.engine.Engine.html#ignite.engine.engine.Engine) implementation has changed in v0.4.10 with “interrupt/resume” feature. Engine may behave differently on certain corner cases compared to the one from v0.4.9 and before. In such case, you can set `Engine.interrupt_resume_enabled = False` to restore previous behaviour.


#### Examples

Create a basic trainer

```

def update_model(engine, batch):
    inputs, targets = batch
    optimizer.zero_grad()
    outputs = model(inputs)
    loss = criterion(outputs, targets)
    loss.backward()
    optimizer.step()
    return loss.item()

trainer = Engine(update_model)

@trainer.on(Events.ITERATION_COMPLETED(every=100))
def log_training(engine):
    batch_loss = engine.state.output
    lr = optimizer.param_groups[0]['lr']
    e = engine.state.epoch
    n = engine.state.max_epochs
    i = engine.state.iteration
    print(f"Epoch {e}/{n} : {i} - batch loss: {batch_loss}, lr: {lr}")

trainer.run(data_loader, max_epochs=5)

> Epoch 1/5 : 100 - batch loss: 0.10874069479016124, lr: 0.01
> ...
> Epoch 2/5 : 1700 - batch loss: 0.4217900575859437, lr: 0.01
```

