import {
	DocumentData,
	FirestoreDataConverter,
	QueryDocumentSnapshot,
	SnapshotOptions,
	WithFieldValue,
} from "firebase/firestore";

type Due = {
	date: string;
	dateTime: string;
	isRecurring: boolean;
	timezone: string;
};

const EventConverter: FirestoreDataConverter<Event> = {
	toFirestore(event: WithFieldValue<Event>): DocumentData {
		return {
			id: event.Id,
			content: event.Title,
			description: event.Description,
			due: event.Due,
			isCompleted: event.IsCompleted,
			labels: event.Labels,
		};
	},
	fromFirestore(
		snapshot: QueryDocumentSnapshot,
		options: SnapshotOptions
	): Event {
		const data = snapshot.data(options);
		return new Event(
			snapshot.id as string,
			data.content as string,
			data.description as string,
			data.due as Due,
			data.isCompleted as boolean,
			data.labels as string[]
		);
		// return {
		// 	id: snapshot.id,
		// 	content: data.content,
		// 	description: data.description,
		// 	due: data.due,
		// 	isCompleted: data.isCompleted,
		// 	labels: data.labels,
		// };
	},
};

class Event {
	private id: string;
	private title: string;
	private description: string;
	private due: Due;
	private isCompleted: boolean;
	private labels: string[];

	public constructor(
		id: string,
		title: string,
		description: string,
		due: Due,
		isCompleted: boolean,
		labels: string[]
	) {
		this.Id = id;
		this.Title = title;
		this.Description = description;
		this.Due = due;
		this.IsCompleted = isCompleted;
		this.Labels = labels;
	}

	public get Id(): string {
		return this.id;
	}
	public get Title(): string {
		return this.title;
	}
	public get Description(): string {
		return this.description;
	}
	public get Due(): Due {
		return this.due;
	}
	public get IsCompleted(): boolean {
		return this.isCompleted;
	}
	public get Labels(): string[] {
		return this.labels;
	}

	public set Id(id: string) {
		this.id = id;
	}
	public set Title(content: string) {
		this.title = content;
	}
	public set Description(description: string) {
		this.description = description;
	}
	public set Due(due: Due) {
		this.due = { ...due };
	}
	public set IsCompleted(isCompleted: boolean) {
		this.isCompleted = isCompleted;
	}
	public set Labels(labels: string[]) {
		this.labels = Object.assign([], labels);
	}
}

// export type EventType = {
// 	id: string;
// 	content: string;
// 	description: string;
// 	due: Due;
// 	isCompleted: boolean;
// 	labels: string[];
// };

// const myEvent: Event = new Event();

// export default Event;
