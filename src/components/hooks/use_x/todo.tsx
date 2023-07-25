import { useTodo } from './use_todo';

/** This is the response that TypiCode gives for the /todos/ endpoint */
export interface TodoResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const Todo = () => {
	
	const url = 'https://jsonplaceholder.typicode.com/todos/1';
	
	const [isFetching, data] = useTodo(url);
	
	return (
		<>
			<h2>Custom Hook</h2>

			{isFetching ? <p>Fetching...</p> : <p>{(typeof data !== 'boolean' && data?.title)}</p>}
		</>
	);
};
