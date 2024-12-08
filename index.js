function superbowlWin(record) {
    // Use find() to locate the first object where result === "W"
    const win = record.find(game => game.result === "W");
    
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
  }
  