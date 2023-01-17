import { useEffect, useState } from "react";

function useUrlParams(initialValue) {
  const [params, setParams] = useState(null);

  useEffect(() => {
    if (initialValue === '') return;
    const paramsQuery = initialValue.replace('?', '').split('&');
    const paramsArray = paramsQuery.map((param) => {
      const splited = param.split('=');
      return [splited[0], splited[1]]
    });
    setParams(paramsArray);
  }, [initialValue])

  return { params };
}

export default useUrlParams;