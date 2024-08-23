const numbers = [
	{
		value: 1970,
		message:
			'The UNIX epoch year for universal computer time representation. One of the first magic numbers you learn in computer science.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Unix_time'
	},
	{
		value: 192168,
		message: 'The most commonly used private IPv4 address range, formally 192.168.0.0/16.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Private_network#Private_IPv4_addresses'
	},
	{
		value: 1337,
		message: '"Leet", in hacker speech.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Leet'
	},
	{
		value: 754,
		message: 'The IEEE standard for floating-point arithmetic used by every modern computer.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/IEEE_754'
	},
	{
		value: 8086,
		message: 'The Intel 8086, the first microprocessor with the now-widespread x86 architecture.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Intel_8086'
	},
	{
		value: 214748,
		message:
			'2^31 - 1 truncated, or the maximum value for a 32-bit signed binary integer. Also a common hard limit in video games.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/2147483647'
	},
	{
		value: 418,
		message: 'The HTTP status code for "I\'m a teapot", an April Fools\' joke by the IETF.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol'
	},
	{
		value: 443,
		message: 'The default port for HTTPS.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/HTTPS#Difference_from_HTTP'
	},
	{
		value: 414141,
		message:
			'"AAA ..." in hexadecimal, a string often used in buffer overflow attacks and other security exploits.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Buffer_overflow'
	},
	{
		value: 44100,
		message: 'The standard sampling rate for digital and analog audio.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/44,100_Hz'
	},
	{
		value: 3301,
		message: 'The Cicada 3301 internet mystery, popularized by LEMMiNO.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Cicada_3301'
	},
	{
		value: 9600,
		message: 'A common baud rate for serial communication.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Baud'
	},
	{
		value: 80211,
		message: 'The IEEE standard for wireless networking, or Wi-Fi.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/IEEE_802.11'
	},
	{
		value: 400000,
		message: 'The base virtual memory address for Linux executables in hexadecimal.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Virtual_memory'
	},
	{
		value: 25519,
		message: 'Curve25519, a widely used elliptic curve in cryptography and key exchange.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Curve25519'
	},
	{
		value: 264,
		message: 'H.264 or Advanced Video Coding, a common video compression standard.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Advanced_Video_Coding'
	},
	{
		value: 509,
		message: 'The X.509 ITU certificate standard, used in TLS and SSL.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/X.509'
	},
	{
		value: 65537,
		message: 'The most commonly chosen exponent in the RSA cryptosystem.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/65537#Applications'
	},
	{
		value: 777,
		message: 'The chmod octal permission mode for full access.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Chmod'
	},
	{
		value: 7400,
		message:
			'A popular series of digital logic integrated circuits, once the most popular for TTL.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/7400-series_integrated_circuits'
	},
	{
		value: 8601,
		message: 'The ISO standard for human-readable universal date and time representation.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/ISO_8601'
	},
	{
		value: 2600,
		message:
			'2600: The Hacker Quarterly, a popular technical magazine, referencing the 2600Hz phreaking tone.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/2600:_The_Hacker_Quarterly'
	},
	{
		value: 5994,
		message: 'The field refresh frequency for NTSC color.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/NTSC#Resolution_and_refresh_rate'
	},
	{
		value: 437,
		message: 'The original IBM PC code page.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Code_page_437'
	},
	{
		value: 471768,
		message:
			'The truncated solution to the 25-year-long Busy Beaver Challenge for 5-state 2-symbol Turing machines.',
		guessed: false,
		link: 'https://en.wikipedia.org/wiki/Busy_Beaver'
	}
];

const technicallyIncorrectNumbers = [
	{
		value: 775,
		message:
			"The chmod octal permission mode for full access is not an intended number. Your guess won't count.",
		guessed: false
	},
	{
		value: 255,
		message:
			"The maximum value for an 8-bit unsigned integer is not an intended number. Your guess won't count.",
		guessed: false
	},
	{
		value: 301,
		message:
			'The HTTP status code for "Moved Permanently" is not an intended number. Your guess won\'t count.',
		guessed: false
	},
	{
		value: 400,
		message:
			'The HTTP status code for "Bad Request" is not an intended number. Your guess won\'t count.',
		guessed: false
	},
	{
		value: 860,
		message:
			'The Intel i860 microprocessor is not an intended number. Your guess won\'t count.',
		guessed: false
	}
];

export function load() {
	return { numbers, technicallyIncorrectNumbers };
}
