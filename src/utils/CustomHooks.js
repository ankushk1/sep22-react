import { useEffect, useState } from "react";

export const useFormHook = () => {
  const [inputVal, setInputVal] = useState({});

  const handleInputChange = (event, type = null) => {
    if (type === "checkbox") {
      setInputVal({ ...inputVal, [event.target.name]: event.target.checked });
    } else {
      setInputVal({ ...inputVal, [event.target.name]: event.target.value });
    }
  };

  return { inputVal, handleInputChange };
};

export const useFetch = (url, filter = null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const filterData = (json) => {
    switch (filter) {
      case "products":
        return json.products;
      case "users":
        return json.users;
      case "quotes":
        return json.quotes;
      default:
        return;
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`${url}/${filter ?? ""}`);
    const json = await res.json();

    filter ? setData(filterData(json)) : setData(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url, filter]);

  return { data, loading };
};

export const useTheme = () => {
  const [theme, setTheme] = useState(false);

  const changeTheme = (document) => {
    document.body.className = !theme ? "bg-dark text-light" : "";
    setTheme(!theme)
  };

  return { theme, changeTheme };
};
