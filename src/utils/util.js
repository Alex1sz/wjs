function fill(jugs, jugKey, capacity) {
  return {
    ...jugs,
    [jugKey]: { value: capacity },
    trace: `Fill ${jugKey}`,
  };
}

function empty(jugs, jugKey, capacity) {
  return {
    ...jugs,
    [jugKey]: { value: 0, capacity: capacity },
    trace: `Empty ${jugKey}`,
  };
}

function transfer(pourer, recipient) {
  const amountToFill = recipient.capacity - recipient.value;

  return {
    [pourer.key]: {
      value: pourer.value > amountToFill ? pourer.value - amountToFill : 0,
    },
    [recipient.key]: {
      value:
        pourer.value > amountToFill
          ? recipient.value + amountToFill
          : recipient.value + pourer.value,
    },
    trace: `Transfer ${pourer.key} to ${recipient.key}`,
  };
}

function isRepeated(path, { jugA, jugB }) {
  return !!path.find(
    x => x.jugA.value === jugA.value && x.jugB.value === jugB.value
  );
}

export function breadthFirstSearch(
  target,
  capacityJugA,
  capacityJugB
) {
  const queue = [];
  const path = [];

  path.push(initialJugStates());
  queue.push(path);

  while (queue.length) {
    const previousPath = queue.shift();
    const previousState = previousPath[previousPath.length - 1];

    if (target === previousState.jugB.value + previousState.jugA.value) return previousPath;

    const states = new Set([
      fill(previousState, 'jugA', capacityJugA),
      fill(previousState, 'jugB', capacityJugB),
      transfer(
        { ...previousState.jugA, key: 'jugA', capacity: capacityJugA },
        { ...previousState.jugB, key: 'jugB', capacity: capacityJugB }
      ),
      transfer(
        { ...previousState.jugB, key: 'jugB', capacity: capacityJugB },
        { ...previousState.jugA, key: 'jugA', capacity: capacityJugA }
      ),
      empty(previousState, 'jugA', capacityJugA),
      empty(previousState, 'jugB', capacityJugB),
    ]);

    for (let item of states) {
      if (!isRepeated(previousPath, item)) {
        let newPath = [...previousPath];

        newPath.push(item);
        queue.push(newPath);
      }
    }
  }
  return 'No solution';
}

function initialJugStates() {
  return {
    jugA: {
      value: 0,
    },
    jugB: {
      value: 0,
    },
    trace: 'Start',
  };
}

