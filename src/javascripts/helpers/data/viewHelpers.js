import cowsView from '../../components/views/cowsView';
import farmersView from '../../components/views/farmersView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'farmers-link':
      return farmersView.farmersView();
    case 'cows-link':
      return cowsView.cowViews();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = () => {
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener, viewHelper };
