const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordain: true,
  shwoTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(resolve(dummyApiResponse), 500);
    } else reject("some error occured! Please try again");
  });
}

export default featureFlagsDataServiceCall;
