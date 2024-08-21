/** @type {[number, string][]} */
const numbers = [
	[
		1970,
		'The UNIX epoch year and universal computer time representation. One of the first magic numbers you learn in computer science'
	],
	[192168, 'The most commonly used private IPv4 address range, formally 192.168.0.0/16'],
	[1337, '"Leet" or "eleet", in hacker speech'],
	[754, 'The IEEE standard for floating-point arithmetic used by every modern computer'],
	[8086, 'The Intel 8086, the first microprocessor with the now-widespread x86 architecture'],
	[
		214748,
		'2^31 - 1 truncated, or the maximum value for a 32-bit signed binary integer. Also a common hard limit in video games'
	],
	[418, 'The HTTP status code for "I\'m a teapot", an April Fools\' joke by the IETF'],
	[443, 'The default port for HTTPS'],
	[
		414141,
		'"AAA" in hexadecimal, a string often used in buffer overflow attacks or other security exploits'
	],
	[44100, 'The standard sample rate for analog audio CDs'],
	[3301, 'The Cicada 3301 internet mystery, popularized by LEMMiNO'],
	[9600, 'A common baud rate for serial communication'],
	[80211, 'The IEEE standard for wireless networking, or Wi-Fi'],
	[400000, 'The base memory address for Linux executables in hexadecimal'],
	[25519, 'Curve25519, a widely used elliptic curve in cryptography and key exchange'],
	[264, 'H.264 or Advanced Video Coding, a common video compression standard'],
	[509, 'The X.509 ITU certificate standard, used in TLS and SSL'],
	[7400, 'A popular series of digital logic integrated circuits'],
	[65537, 'The de facto exponent used in RSA encryption'],
	[777, 'The chmod octal permission mode for full access'],
	[8601, 'The ISO standard for date and time representation'],
	[2600, '2600: The Hacker Quarterly, a popular technical magazine for hackers'],
	[5994, 'The NTSC vertical scan rate'],
	[437, 'The original IBM PC code page'],
	[
		471768,
		'The truncated solution to the 25-year-long Busy Beaver Challenge for 5-state 2-symbol Turing machines'
	]
];

const fakeNumbers = [775, 255, 301, 400];

/** @type {import('./$types').PageLoad} */
export function load() {
	return { numbers, fakeNumbers };
}
