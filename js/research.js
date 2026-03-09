new LeaderLine(
  document.getElementById('start-item'),
  document.getElementById('end-item'),
  {
    path: 'magnet',      // Makes it look like a nice organic curve
    startSocket: 'right', // Arrow starts from the right side
    endSocket: 'right',   // Arrow enters from the right side
    color: 'orange',
    size: 3,
    startPlug: 'disc'    // Add a little dot at the start
  }
);