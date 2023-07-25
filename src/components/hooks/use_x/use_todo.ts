import { useEffect, useState } from "react";
import { isError } from "../../../helpers/is_error";
import { TodoResponse } from "./todo";

export const useTodo = (url: string) => {
  const [data, setData] = useState<TodoResponse>();
	const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
		const fetchData = async () => {
			try {
        const response = await fetch(url);
				
				setIsFetching(false);
				if (response.status === 200) {
					const json = await response.json();
					setData(json);
				}
			} catch (e: unknown) {
				setIsFetching(false);

				console.log(isError(e) ? e.message : 'Unknown error!');
			}
		};
		fetchData();
	}, [url]);

  return [isFetching, data];
};
