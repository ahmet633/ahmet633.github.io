const show = document.getElementById('show');
const index = document.getElementById('index');
var currentIndex = 1

const updateIndex = (newVal) => {
  currentIndex = newVal;
  index.innerText = currentIndex;
}

const stepList = {
  ekim: {

  }, toplama:{

  }, isleme:{

  }, kurutma:{

  }, haddeleme:{

  }, ihrac:{

  }, tadim:{

  }, kavurma:{

  }, ogutme:{

  }, paketleme:{

  }, demleme:{

  }
}

// displays the previous step
const prevStep = () => {
  if(currentIndex <= 1){
    updateIndex(1)
  } else {
    updateIndex(currentIndex-1)
    // LOGIC

  }
}

// displays the next step
const nextStep = () => {
  if(currentIndex >= 11){
    rewind();
  } else {
    updateIndex(currentIndex+1)
    // LOGIC

  }

}

// restarts the animation
const rewind = () => {
  updateIndex(1)
}



/* UTILITY ANIMATIONS */

// cycles the sun once
const sunCycle = () => {

}

// strikes the lightning once
const lightning = () => {

}