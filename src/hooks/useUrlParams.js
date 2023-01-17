import { useEffect, useState } from "react";

function useUrlParams(initialValue) {
  const [params, setParams] = useState(null);

  useEffect(() => {
    if (initialValue.search === '') return;
    const paramsQuery = initialValue.search.replace('?', '').split('&');
    const paramsArray = paramsQuery.map((param) => {
      const splited = param.split('=');
      return [splited[0], splited[1]]
    });
    setParams(paramsArray);
  }, [initialValue])

  const redirectPage = () => {
    setParams(null);
    let path = initialValue.pathname;
    return path;
  }

  return { params, redirectPage };
}

export default useUrlParams;