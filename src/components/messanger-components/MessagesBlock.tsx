import { MessageI } from "@/interfaces/massage.interface";


export default function Messages({el}: {el: MessageI}) {
	return (
		<article>
			<b>{el.sender}</b>
			<p>{el.value}</p>
		</article>
	)
}