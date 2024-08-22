const numbers = [
	{
		value: 1970,
		message:
			'The UNIX epoch year and universal computer time representation. One of the first magic numbers you learn in computer science.',
		guessed: false
	},
	{
		value: 192168,
		message: 'The most commonly used private IPv4 address range, formally 192.168.0.0/16.',
		guessed: false
	},
	{ value: 1337, message: '"Leet", in hacker speech.', guessed: false },
	{
		value: 754,
		message: 'The IEEE standard for floating-point arithmetic used by every modern computer.',
		guessed: false
	},
	{
		value: 8086,
		message: 'The Intel 8086, the first microprocessor with the now-widespread x86 architecture.',
		guessed: false
	},
	{
		value: 214748,
		message:
			'2^31 - 1 truncated, or the maximum value for a 32-bit signed binary integer. Also a common hard limit in video games.',
		guessed: false
	},
	{
		value: 418,
		message: 'The HTTP status code for "I\'m a teapot", an April Fools\' joke by the IETF.',
		guessed: false
	},
	{ value: 443, message: 'The default port for HTTPS.', guessed: false },
	{
		value: 414141,
		message:
			'"AAA" in hexadecimal, a string often used in buffer overflow attacks or other security exploits.',
		guessed: false
	},
	{ value: 44100, message: 'The standard sample rate for analog audio CDs.', guessed: false },
	{
		value: 3301,
		message: 'The Cicada 3301 internet mystery, popularized by LEMMiNO.',
		guessed: false
	},
	{ value: 9600, message: 'A common baud rate for serial communication.', guessed: false },
	{ value: 80211, message: 'The IEEE standard for wireless networking, or Wi-Fi.', guessed: false },
	{
		value: 400000,
		message: 'The base memory address for Linux executables in hexadecimal.',
		guessed: false
	},
	{
		value: 25519,
		message: 'Curve25519, a widely used elliptic curve in cryptography and key exchange.',
		guessed: false
	},
	{
		value: 264,
		message: 'H.264 or Advanced Video Coding, a common video compression standard.',
		guessed: false
	},
	{
		value: 509,
		message: 'The X.509 ITU certificate standard, used in TLS and SSL.',
		guessed: false
	},
	{
		value: 7400,
		message: 'A popular series of digital logic integrated circuits.',
		guessed: false
	},
	{ value: 65537, message: 'The de facto exponent used in RSA encryption.', guessed: false },
	{ value: 777, message: 'The chmod octal permission mode for full access.', guessed: false },
	{ value: 8601, message: 'The ISO standard for date and time representation.', guessed: false },
	{
		value: 2600,
		message: '2600: The Hacker Quarterly, a popular technical magazine for hackers.',
		guessed: false
	},
	{ value: 5994, message: 'The NTSC vertical scan rate.', guessed: false },
	{ value: 437, message: 'The original IBM PC code page.', guessed: false },
	{
		value: 471768,
		message:
			'The truncated solution to the 25-year-long Busy Beaver Challenge for 5-state 2-symbol Turing machines.',
		guessed: false
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
	}
];

export function load() {
	return { numbers, technicallyIncorrectNumbers };
}
