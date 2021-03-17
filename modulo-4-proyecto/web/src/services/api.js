const createCard = (data) => {
  return fetch(
    "/card/",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((resp) => resp.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch(() => {
      return {
        success: false,
        error: "Se ha producido un error. Inténtelo más tarde",
      };
    });
};

const exportSummaryObject = { createCard }

export default exportSummaryObject;