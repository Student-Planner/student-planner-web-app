import sampleEventsJson from "./events.json";
import {Event} from '@prisma/client'

const sampleEvents: Event[] = [
	{
		"id": "6383ad917b885b6a01c94c10",
		"title": "anim occaecat veniam",
		"description": "ad aliquip velit laborum commodo ea tempor dolor labore quis dolore id",
		"due": new Date("2023-01-18T22:14:27.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#1A2FBF",
		"labels": [
			"fugiat",
			"nostrud",
			"labore",
			"voluptate",
			"qui",
			"elit",
			"ipsum"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad913864d2ac44fc241f",
		"title": "aliqua minim dolore",
		"description": "enim cillum minim eu adipisicing veniam ipsum ea velit qui sit deserunt",
		"due": new Date("2023-01-13T22:02:04.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#98102E",
		"labels": ["culpa", "sint", "eu", "magna", "irure", "laborum", "et"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91cfda4d3017673265",
		"title": "incididunt incididunt pariatur",
		"description": "mollit minim id irure aliqua id ut velit sit exercitation Lorem nisi",
		"due": new Date("2023-01-28T09:30:30.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#1D1669",
		"labels": [
			"est",
			"ad",
			"amet",
			"ullamco",
			"Lorem",
			"commodo",
			"laboris"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad9140c0250c561f410f",
		"title": "exercitation dolore id",
		"description": "commodo sunt elit irure minim eu aute consectetur est irure cillum elit",
		"due": new Date("2023-01-01T01:41:18.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#591F64",
		"labels": [
			"consectetur",
			"anim",
			"deserunt",
			"proident",
			"aute",
			"aliqua",
			"nisi"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91f2c4c4ffb2a50f1d",
		"title": "minim excepteur cillum",
		"description": "culpa voluptate mollit ipsum laboris irure fugiat anim dolor irure mollit proident",
		"due": new Date("2023-01-17T22:42:09.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#574021",
		"labels": [
			"nostrud",
			"est",
			"laboris",
			"ipsum",
			"minim",
			"minim",
			"mollit"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91391bef26587e84a0",
		"title": "ex enim sint",
		"description": "dolor irure cillum ut minim mollit aliqua ad adipisicing anim et eu",
		"due": new Date("2023-01-03T07:39:03.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#6AA694",
		"labels": [
			"dolor",
			"aliquip",
			"aliquip",
			"labore",
			"eu",
			"eiusmod",
			"enim"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad910c90cdc623a674d2",
		"title": "ipsum cillum laboris",
		"description": "voluptate officia ea et et labore irure minim officia aute sunt laboris",
		"due": new Date("2023-01-19T06:57:43.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#581D7F",
		"labels": [
			"officia",
			"anim",
			"eu",
			"fugiat",
			"commodo",
			"culpa",
			"consectetur"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91d88061be87746935",
		"title": "commodo veniam anim",
		"description": "sit culpa laborum incididunt velit in commodo labore dolore duis anim est",
		"due": new Date("2023-01-10T23:16:11.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#948119",
		"labels": [
			"veniam",
			"commodo",
			"quis",
			"labore",
			"enim",
			"nostrud",
			"elit"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91a64a5160fb08ce9a",
		"title": "exercitation duis velit",
		"description": "sit elit incididunt mollit sit labore anim aliquip consectetur aute mollit consectetur",
		"due": new Date("2022-12-31T22:08:47.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#81A6BD",
		"labels": [
			"aliquip",
			"enim",
			"sunt",
			"proident",
			"nulla",
			"minim",
			"anim"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad9145d20dac5dce56b2",
		"title": "ad ipsum anim",
		"description": "ullamco nostrud mollit tempor ullamco reprehenderit consectetur irure sunt adipisicing aute sit",
		"due": new Date("2023-01-20T22:42:09.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#CC906D",
		"labels": [
			"do",
			"reprehenderit",
			"proident",
			"non",
			"non",
			"reprehenderit",
			"magna"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91a8503f10c9b21a73",
		"title": "consequat incididunt eiusmod",
		"description": "commodo dolor sint id sunt non nisi minim labore excepteur laborum fugiat",
		"due": new Date("2023-01-25T06:59:45.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#31F8EC",
		"labels": [
			"aliqua",
			"veniam",
			"proident",
			"adipisicing",
			"enim",
			"exercitation",
			"laboris"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91f38c9311bde8bf79",
		"title": "cillum tempor anim",
		"description": "sint laboris irure sint nostrud duis sit nulla laborum labore exercitation commodo",
		"due": new Date("2023-01-11T03:49:02.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#434BAF",
		"labels": [
			"sunt",
			"ex",
			"incididunt",
			"reprehenderit",
			"incididunt",
			"et",
			"mollit"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91f1df1150d6e124d2",
		"title": "eiusmod enim incididunt",
		"description": "velit mollit excepteur tempor commodo excepteur duis duis enim magna aliquip do",
		"due": new Date("2023-01-18T08:51:10.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#D6C7F5",
		"labels": ["ipsum", "enim", "et", "qui", "id", "non", "esse"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad9108c54948c5922989",
		"title": "enim veniam minim",
		"description": "tempor nisi id labore do ipsum ipsum officia sint irure irure deserunt",
		"due": new Date("2023-01-02T08:30:58.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#B67E93",
		"labels": [
			"incididunt",
			"exercitation",
			"consectetur",
			"sunt",
			"dolor",
			"mollit",
			"velit"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91278a77289d3bd20b",
		"title": "labore aliquip labore",
		"description": "duis amet amet fugiat ad do voluptate minim Lorem nisi eu ut",
		"due": new Date("2023-01-02T06:34:18.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#1522A7",
		"labels": ["fugiat", "ad", "qui", "commodo", "in", "veniam", "minim"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91d99c4a020c448c1c",
		"title": "do elit veniam",
		"description": "mollit aute fugiat laboris dolore dolor sit sunt cillum ullamco dolore ullamco",
		"due": new Date("2023-01-12T08:47:28.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#581366",
		"labels": [
			"eiusmod",
			"veniam",
			"magna",
			"reprehenderit",
			"cillum",
			"aliquip",
			"duis"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91151d471f0c97732e",
		"title": "duis enim Lorem",
		"description": "velit laboris cupidatat consectetur nisi esse deserunt dolor consectetur ipsum commodo dolor",
		"due": new Date("2023-01-18T06:16:41.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#9657A4",
		"labels": ["velit", "mollit", "magna", "labore", "non", "ea", "et"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad912898a2ec5ac5c0ec",
		"title": "esse velit dolore",
		"description": "velit ex sit sunt nulla ut aliquip laboris laborum dolore anim et",
		"due": new Date("2023-01-04T07:04:57.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#D8F71B",
		"labels": ["id", "enim", "sint", "voluptate", "sint", "veniam", "nisi"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91b88514670e327aaf",
		"title": "ipsum est dolore",
		"description": "nostrud proident laboris laboris est commodo duis minim enim commodo commodo commodo",
		"due": new Date("2023-01-26T22:22:43.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#961A57",
		"labels": [
			"officia",
			"est",
			"eu",
			"pariatur",
			"exercitation",
			"proident",
			"aliquip"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad917e7f330795319688",
		"title": "aliqua enim officia",
		"description": "dolor aute sit duis commodo ea pariatur ullamco qui labore non est",
		"due": new Date("2023-01-04T00:35:36.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#81CC73",
		"labels": [
			"eu",
			"sint",
			"ullamco",
			"occaecat",
			"mollit",
			"duis",
			"proident"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad9122831727ce9580f4",
		"title": "exercitation aliqua dolor",
		"description": "magna laborum eu anim sunt do sint commodo nostrud Lorem id ad",
		"due": new Date("2023-01-15T09:39:52.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#AA2160",
		"labels": [
			"reprehenderit",
			"nisi",
			"id",
			"tempor",
			"elit",
			"deserunt",
			"commodo"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad912f087b2d154dc64a",
		"title": "est adipisicing magna",
		"description": "sit consectetur deserunt adipisicing enim culpa id quis commodo nostrud officia labore",
		"due": new Date("2023-01-21T08:49:44.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#84C172",
		"labels": [
			"nostrud",
			"consequat",
			"pariatur",
			"deserunt",
			"Lorem",
			"labore",
			"culpa"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91a5704905b19ff925",
		"title": "enim excepteur mollit",
		"description": "tempor irure magna pariatur veniam quis minim eu ullamco minim ea irure",
		"due": new Date("2023-01-01T09:34:29.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#AD98C5",
		"labels": [
			"qui",
			"ut",
			"in",
			"proident",
			"anim",
			"adipisicing",
			"mollit"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad912b7c3ac5e7ae33c2",
		"title": "est ex cupidatat",
		"description": "qui proident non occaecat eiusmod qui consequat cillum tempor incididunt fugiat cillum",
		"due": new Date("2023-01-06T05:36:30.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#CA013C",
		"labels": [
			"irure",
			"consequat",
			"adipisicing",
			"ipsum",
			"ad",
			"sunt",
			"consectetur"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad915673a0f539d2cb8c",
		"title": "duis culpa est",
		"description": "nulla qui quis enim ullamco laboris sunt esse Lorem aliquip occaecat labore",
		"due": new Date("2023-01-28T04:43:55.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#319F42",
		"labels": [
			"voluptate",
			"nostrud",
			"velit",
			"enim",
			"ut",
			"aute",
			"sint"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad912516ab2f82f410cf",
		"title": "tempor fugiat aliqua",
		"description": "consequat qui amet velit eiusmod commodo mollit esse non quis cupidatat mollit",
		"due": new Date("2023-01-08T23:22:49.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#781125",
		"labels": [
			"reprehenderit",
			"duis",
			"velit",
			"ullamco",
			"qui",
			"id",
			"aliqua"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91e7231522e8e95616",
		"title": "officia fugiat cupidatat",
		"description": "velit tempor ad ullamco laboris nulla quis nostrud dolore enim exercitation culpa",
		"due": new Date("2023-01-25T00:02:23.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#0EDCA0",
		"labels": ["non", "amet", "quis", "reprehenderit", "ad", "ut", "Lorem"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad918802a8138a3b19dc",
		"title": "fugiat mollit dolor",
		"description": "est ullamco amet mollit laboris esse elit magna fugiat sint in adipisicing",
		"due": new Date("2023-01-27T00:37:12.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#77434B",
		"labels": [
			"elit",
			"reprehenderit",
			"id",
			"aliqua",
			"amet",
			"nulla",
			"non"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91d7fabb9a05496358",
		"title": "ea do amet",
		"description": "deserunt velit veniam cupidatat cillum Lorem ex adipisicing enim amet incididunt aliquip",
		"due": new Date("2023-01-03T03:40:12.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#B8E603",
		"labels": [
			"eiusmod",
			"non",
			"eu",
			"laboris",
			"consectetur",
			"velit",
			"officia"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad919f48cbb74ecf5002",
		"title": "proident ut nulla",
		"description": "id cupidatat Lorem officia eiusmod consequat exercitation laboris incididunt mollit ut magna",
		"due": new Date("2023-01-13T07:13:22.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#8238E4",
		"labels": [
			"mollit",
			"sit",
			"aute",
			"labore",
			"deserunt",
			"consectetur",
			"irure"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad912039875bc5a46b9c",
		"title": "do incididunt excepteur",
		"description": "est elit fugiat laboris ad Lorem quis ea et eu non culpa",
		"due": new Date("2023-01-18T06:23:36.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#580E9A",
		"labels": [
			"cillum",
			"aliqua",
			"commodo",
			"aliqua",
			"do",
			"minim",
			"ad"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91660daef79c76397d",
		"title": "sint labore elit",
		"description": "voluptate magna pariatur non non incididunt non deserunt cillum incididunt labore pariatur",
		"due": new Date("2023-01-12T06:39:52.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#322B3F",
		"labels": ["Lorem", "est", "irure", "sunt", "ad", "pariatur", "dolor"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91a85cd0ecf0995833",
		"title": "aute aliquip cillum",
		"description": "ut commodo enim ad reprehenderit aute occaecat proident eiusmod velit reprehenderit reprehenderit",
		"due": new Date("2023-01-20T02:38:48.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#DD3E87",
		"labels": ["irure", "sunt", "qui", "nisi", "in", "in", "occaecat"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91544b4c598d699d00",
		"title": "velit commodo duis",
		"description": "non sit eiusmod nisi anim ex deserunt incididunt quis nostrud exercitation tempor",
		"due": new Date("2023-01-06T02:56:07.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#2A43AA",
		"labels": [
			"elit",
			"qui",
			"excepteur",
			"commodo",
			"eu",
			"exercitation",
			"duis"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad9134c1bce66d417390",
		"title": "ea nisi cillum",
		"description": "eiusmod laboris in fugiat culpa dolore pariatur sunt occaecat mollit nostrud excepteur",
		"due": new Date("2023-01-17T06:26:08.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#5C9CE9",
		"labels": [
			"dolore",
			"tempor",
			"duis",
			"amet",
			"Lorem",
			"qui",
			"deserunt"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91ab849948800adc76",
		"title": "ex nisi deserunt",
		"description": "consectetur adipisicing labore amet et fugiat dolore aute elit occaecat fugiat incididunt",
		"due": new Date("2023-01-04T03:39:56.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#B2D517",
		"labels": [
			"veniam",
			"veniam",
			"Lorem",
			"ad",
			"cillum",
			"deserunt",
			"cupidatat"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad912fc7eed643e4b7eb",
		"title": "aliquip pariatur eiusmod",
		"description": "sit commodo commodo aute consequat amet ex id in eiusmod nisi ad",
		"due": new Date("2023-01-14T04:54:19.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#3BF541",
		"labels": ["cupidatat", "aute", "enim", "id", "sunt", "id", "duis"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91846bde178b2c789d",
		"title": "proident qui elit",
		"description": "reprehenderit consequat sint Lorem fugiat ullamco in do ad aliqua dolore id",
		"due": new Date("2023-01-27T23:48:52.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#1506D4",
		"labels": ["do", "ipsum", "magna", "ad", "anim", "dolor", "officia"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad912d1162668b2e0e44",
		"title": "commodo anim enim",
		"description": "ipsum et labore esse consectetur proident nulla ullamco irure minim duis incididunt",
		"due": new Date("2023-01-01T04:51:48.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#7CEDE8",
		"labels": [
			"nulla",
			"magna",
			"nulla",
			"est",
			"consequat",
			"nulla",
			"enim"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad911dc109b660dea66d",
		"title": "Lorem ullamco exercitation",
		"description": "dolore id laborum occaecat sint minim do sunt ea sit velit adipisicing",
		"due": new Date("2023-01-12T09:34:08.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#6E28FA",
		"labels": ["occaecat", "magna", "eu", "do", "veniam", "magna", "minim"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad913364c62df61560cf",
		"title": "id duis occaecat",
		"description": "et in quis sint sint proident mollit sit cupidatat esse amet culpa",
		"due": new Date("2023-01-12T06:49:42.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#82E7EA",
		"labels": [
			"non",
			"excepteur",
			"ad",
			"commodo",
			"eiusmod",
			"ex",
			"laboris"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91fec6a00bd1b571b1",
		"title": "elit deserunt et",
		"description": "pariatur ea Lorem non non ex nostrud magna veniam non consectetur in",
		"due": new Date("2023-01-22T23:06:34.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#A5B2E7",
		"labels": ["fugiat", "sunt", "sunt", "id", "Lorem", "id", "incididunt"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad917a412f9aacca9c27",
		"title": "mollit et voluptate",
		"description": "nisi nisi commodo aliqua eu anim quis consequat fugiat veniam occaecat ipsum",
		"due": new Date("2023-01-06T23:39:29.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#3B409F",
		"labels": [
			"magna",
			"sit",
			"anim",
			"ad",
			"irure",
			"reprehenderit",
			"laborum"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91ff288a8d75c72ecd",
		"title": "deserunt fugiat pariatur",
		"description": "mollit consectetur consectetur minim dolore tempor ullamco laborum non veniam reprehenderit mollit",
		"due": new Date("2023-01-03T02:50:04.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#48337E",
		"labels": ["sit", "nulla", "deserunt", "id", "enim", "magna", "amet"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91f636afe7b3d77b80",
		"title": "mollit ipsum deserunt",
		"description": "eiusmod duis dolore esse cupidatat sit ipsum ad culpa nisi velit sit",
		"due": new Date("2023-01-15T09:24:00.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#5C511E",
		"labels": [
			"exercitation",
			"commodo",
			"cillum",
			"incididunt",
			"exercitation",
			"ea",
			"nisi"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91e52681e92d955cc0",
		"title": "ipsum pariatur esse",
		"description": "quis reprehenderit labore consectetur magna irure aute esse laborum cillum reprehenderit dolore",
		"due": new Date("2023-01-29T08:04:15.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#111407",
		"labels": [
			"excepteur",
			"ipsum",
			"ut",
			"nulla",
			"exercitation",
			"laboris",
			"in"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91b191a2ee957d6b7f",
		"title": "nulla aute occaecat",
		"description": "sit adipisicing duis non incididunt do ex labore nostrud dolore irure ex",
		"due": new Date("2023-01-23T07:40:21.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#F10774",
		"labels": [
			"dolore",
			"exercitation",
			"ut",
			"Lorem",
			"veniam",
			"quis",
			"id"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91503fe2dd28d30efa",
		"title": "aliquip esse in",
		"description": "nisi culpa sit quis et magna duis mollit mollit est amet excepteur",
		"due": new Date("2023-01-26T09:56:30.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#61ACA7",
		"labels": [
			"cupidatat",
			"veniam",
			"irure",
			"magna",
			"qui",
			"aute",
			"velit"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad9151f7ea464042dd1f",
		"title": "elit et aliquip",
		"description": "Lorem voluptate dolor est quis eiusmod cillum voluptate esse consequat nisi adipisicing",
		"due": new Date("2023-01-04T01:35:16.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#0431BC",
		"labels": [
			"non",
			"dolore",
			"aliqua",
			"eiusmod",
			"sit",
			"occaecat",
			"enim"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad919fcf95ff08c01494",
		"title": "ipsum non aute",
		"description": "et excepteur excepteur ea nostrud id cillum aliquip dolore irure nisi reprehenderit",
		"due": new Date("2023-01-25T07:38:42.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#67C474",
		"labels": [
			"consectetur",
			"Lorem",
			"adipisicing",
			"id",
			"ex",
			"velit",
			"ex"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91308a5ebfa3977e2e",
		"title": "pariatur voluptate irure",
		"description": "voluptate tempor exercitation velit aliquip ipsum aliquip consequat laboris consequat minim ea",
		"due": new Date("2023-01-24T07:53:41.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#6A2B8C",
		"labels": [
			"labore",
			"Lorem",
			"esse",
			"ipsum",
			"fugiat",
			"occaecat",
			"fugiat"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91ad7f76d7c55e95ca",
		"title": "eiusmod incididunt voluptate",
		"description": "in minim est excepteur enim non minim cupidatat occaecat ex sint duis",
		"due": new Date("2023-01-23T23:37:16.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#B8FBBC",
		"labels": [
			"laboris",
			"sunt",
			"cillum",
			"excepteur",
			"do",
			"sunt",
			"do"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad9193d24acb4f3c3606",
		"title": "laboris nisi in",
		"description": "dolor quis proident mollit reprehenderit occaecat irure esse officia amet non velit",
		"due": new Date("2023-01-28T06:19:31.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#D41FD5",
		"labels": [
			"pariatur",
			"adipisicing",
			"labore",
			"deserunt",
			"est",
			"occaecat",
			"enim"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad9124c67f084db081c4",
		"title": "officia eiusmod ad",
		"description": "dolor irure eiusmod duis aliquip irure quis eiusmod ipsum proident nisi eiusmod",
		"due": new Date("2023-01-22T06:47:59.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#CBDE70",
		"labels": [
			"non",
			"ea",
			"eu",
			"proident",
			"fugiat",
			"eiusmod",
			"commodo"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91e44acf07c2c2ed4b",
		"title": "nulla nostrud aliquip",
		"description": "consequat ut nulla ipsum irure culpa consectetur ut amet veniam cillum eu",
		"due": new Date("2023-01-03T09:31:56.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#048A97",
		"labels": [
			"consequat",
			"anim",
			"cillum",
			"ut",
			"voluptate",
			"amet",
			"voluptate"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91d0e25e1076c11362",
		"title": "minim fugiat elit",
		"description": "proident adipisicing sit enim nulla cillum ut occaecat commodo minim do nulla",
		"due": new Date("2023-01-16T06:46:59.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#2EDBD4",
		"labels": [
			"nostrud",
			"ipsum",
			"cillum",
			"esse",
			"exercitation",
			"ad",
			"ut"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91a19292abaf158140",
		"title": "elit proident aliquip",
		"description": "et cillum adipisicing velit excepteur veniam sit cillum occaecat id duis exercitation",
		"due": new Date("2023-01-25T00:30:22.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#2A5D05",
		"labels": ["et", "labore", "eu", "Lorem", "sint", "duis", "officia"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91279b664b161100e2",
		"title": "mollit Lorem reprehenderit",
		"description": "amet dolor ipsum ipsum consequat irure mollit veniam commodo irure cillum excepteur",
		"due": new Date("2023-01-22T00:27:05.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": true,
		"color": "#8CA5FD",
		"labels": ["ex", "laboris", "amet", "sit", "est", "in", "sint"],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad912e2f3b6b0fb237d9",
		"title": "officia irure amet",
		"description": "nostrud labore incididunt deserunt fugiat magna sint esse est duis aliquip voluptate",
		"due": new Date("2023-01-06T07:30:52.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#E5F0D5",
		"labels": [
			"anim",
			"nulla",
			"reprehenderit",
			"laboris",
			"excepteur",
			"occaecat",
			"eiusmod"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	},
	{
		"id": "6383ad91f7882634f0e92258",
		"title": "excepteur sit amet",
		"description": "fugiat in magna nulla qui excepteur esse ea dolor aute irure adipisicing",
		"due": new Date("2023-01-01T00:30:29.000Z"),
		"created": new Date("2023-01-07T11:47:38.808Z"),
		"updated": new Date("2023-01-07T11:47:38.808Z"),
		"isRecurring": false,
		"isCompleted": false,
		"color": "#B02187",
		"labels": [
			"pariatur",
			"laborum",
			"incididunt",
			"aliqua",
			"ea",
			"mollit",
			"exercitation"
		],
		"userId": "clci8v99k0000lk5gx93ehels"
	}
]
;

export default sampleEvents;
