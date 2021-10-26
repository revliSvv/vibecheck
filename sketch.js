
function vibeCheck() {
  let x = prompt('crimas tree');

  let y = /cheese|obama|joe|mama|nou/i.test(x);

  if (y) {
    alert('😎 ur coolio');
    return true;
  }
  else {
    alert('🥱😫🙄 ew ');
    setTimeout(
      () => {
        location.replace('https://www.youtube.com/watch?v=j5a0jTc9S10');
      }, 500
      );
    return false;
  }
}

