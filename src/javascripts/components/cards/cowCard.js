import cowData from '../../helpers/data/cowData';

const cowMaker = (cowObject) => {
  const domstring = `<div class="card m-2" style="width: 18rem;" id="${cowObject.firebaseKey}">
  <div class="card-body">
    <h5 class="card-title">${cowObject.name}</h5>
    <p class="card-text">
      Breed: ${cowObject.breed}<br />
      Location: ${cowObject.location}<br />
      Weight: ${cowObject.weight}<br />
    </p>
    <a href="#" id="${cowObject.firebaseKey}" class="btn btn-danger delete-cow">Delete Cow</a>
   </div>
  </div>`;

  $('body').on('click', '.delete-cow', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    cowData.deleteCow(firebaseKey);
  });

  return domstring;
};

export default { cowMaker };
