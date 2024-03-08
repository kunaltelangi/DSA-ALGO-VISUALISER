let selectedSort;

function selectSort(sortType) {
  selectedSort = sortType;
  generateArray();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
  let array = document.querySelectorAll('.bar');
  let n = array.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      array[i].style.backgroundColor = 'red';
      array[i + 1].style.backgroundColor = 'red';
      await sleep(300);

      if (parseInt(array[i].style.height) > parseInt(array[i + 1].style.height)) {
        let temp = array[i].style.height;
        array[i].style.height = array[i + 1].style.height;
        array[i + 1].style.height = temp;
        swapped = true;
      }

      array[i].style.backgroundColor = '#007bff';
      array[i + 1].style.backgroundColor = '#007bff';
    }
    n--;
  } while (swapped);
}

async function insertionSort() {
  let array = document.querySelectorAll('.bar');
  let n = array.length;

  for (let i = 1; i < n; i++) {
    let key = parseInt(array[i].style.height);
    let j = i - 1;
    array[i].style.backgroundColor = 'red';
    await sleep(300);

    while (j >= 0 && parseInt(array[j].style.height) > key) {
      array[j + 1].style.height = array[j].style.height;
      j--;
      await sleep(300);
    }

    array[j + 1].style.height = key + 'px';
    array[i].style.backgroundColor = '#007bff';
  }
}

async function selectionSort() {
  let array = document.querySelectorAll('.bar');
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    array[i].style.backgroundColor = 'red';
    await sleep(300);

    for (let j = i + 1; j < n; j++) {
      array[j].style.backgroundColor = 'red';
      await sleep(300);

      if (parseInt(array[j].style.height) < parseInt(array[minIndex].style.height)) {
        minIndex = j;
      }

      array[j].style.backgroundColor = '#007bff';
    }

    let temp = array[minIndex].style.height;
    array[minIndex].style.height = array[i].style.height;
    array[i].style.height = temp;
    array[i].style.backgroundColor = '#007bff';
  }
}

function startSorting() {
  if (selectedSort === 'bubble') {
    bubbleSort();
  } else if (selectedSort === 'insertion') {
    insertionSort();
  } else if (selectedSort === 'selection') {
    selectionSort();
  }
}

function generateArray() {
  let container = document.getElementById('array-container');
  container.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    let height = Math.floor(Math.random() * 300) + 20; // Adjusted range to 20 - 300
    let bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = height + 'px';
    bar.style.width = '40px'; // Fixed width for all bars
    container.appendChild(bar);
  }
}

generateArray();
