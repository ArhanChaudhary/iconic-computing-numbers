const numbers = [
	{
		value: '1970',
		message: 'The UNIX epoch year for universal computer time representation.',
		link: 'https://en.wikipedia.org/wiki/Unix_time'
	},
	{
		value: '192168',
		message: 'The 192.168.0.0/16 private IPv4 address range.',
		link: 'https://en.wikipedia.org/wiki/Private_network#Private_IPv4_addresses'
	},
	{
		value: '1337',
		message: 'The word "Leet", or hacker speech.',
		link: 'https://en.wikipedia.org/wiki/Leet'
	},
	{
		value: '8086',
		message: 'The Intel 8086, the first microprocessor with the now-widespread x86 architecture.',
		link: 'https://en.wikipedia.org/wiki/Intel_8086'
	},
	{
		value: '414141',
		message:
			'The hexadecimal representation of "AAA ...", a string often used in buffer overflow attacks and other security exploits.',
		link: 'https://en.wikipedia.org/wiki/Buffer_overflow'
	},
	{
		value: '44100',
		message: 'The 44,100Hz standard sampling rate for digital and analog audio.',
		link: 'https://en.wikipedia.org/wiki/44,100_Hz'
	},
	{
		value: '418',
		message:
			'The HTTP status code for "I\'m a teapot", an April Fools\' joke by the Internet Engineering Task Force.',
		link: 'https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol'
	},
	{
		value: '9600',
		message: 'The most common baud rate for serial communication.',
		link: 'https://en.wikipedia.org/wiki/Baud'
	},
	{
		value: '754',
		message: 'The IEEE standard for floating-point arithmetic used by every modern computer.',
		link: 'https://en.wikipedia.org/wiki/IEEE_754'
	},
	{
		value: '443',
		message: 'The default port for HTTPS.',
		link: 'https://en.wikipedia.org/wiki/HTTPS#Difference_from_HTTP'
	},

	{
		value: '3301',
		message: 'The Cicada 3301 internet mystery, popularized by LEMMiNO.',
		link: 'https://en.wikipedia.org/wiki/Cicada_3301'
	},
	{
		value: '80211',
		message: 'The IEEE 802.11 standard for wireless networking.',
		link: 'https://en.wikipedia.org/wiki/IEEE_802.11'
	},
	{
		value: '400000',
		message: 'The base virtual memory address for Linux executables in hexadecimal.',
		link: 'https://en.wikipedia.org/wiki/Virtual_memory'
	},
	{
		value: '214748',
		message:
			'The truncated maximum value for the signed 32-bit binary integer. Also a common hard limit in video games.',
		link: 'https://en.wikipedia.org/wiki/2147483647'
	},
	{
		value: '86400',
		message: 'The number of seconds in a day, common in time-related calculations.',
		link: 'https://en.wikipedia.org/wiki/second'
	},
	{
		value: '25519',
		message: 'The Curve25519 elliptic curve, widely used in cryptography and key exchange.',
		link: 'https://en.wikipedia.org/wiki/Curve25519'
	},
	{
		value: '264',
		message: 'The H.264 standard, the most commonly used format for video compression.',
		link: 'https://en.wikipedia.org/wiki/Advanced_Video_Coding'
	},
	{
		value: '1500',
		message: 'The maximum transmission unit for Ethernet frames in octets.',
		link: 'https://en.wikipedia.org/wiki/Ethernet_frame#Structure'
	},
	{
		value: '8601',
		message: 'The ISO standard for human-readable universal date and time representation.',
		link: 'https://en.wikipedia.org/wiki/ISO_8601'
	},
	{
		value: '640480',
		message: 'The 640x480 VGA resolution.',
		link: 'https://en.wikipedia.org/wiki/Video_Graphics_Array'
	},
	{
		value: '65537',
		message: 'The most commonly used exponent in the RSA cryptosystem.',
		link: 'https://en.wikipedia.org/wiki/65537#Applications'
	},
	{
		value: '777',
		message: 'The chmod octal permission mode for full access.',
		link: 'https://en.wikipedia.org/wiki/Chmod'
	},
	{
		value: '509',
		message: 'The X.509 public key certificate standard.',
		link: 'https://en.wikipedia.org/wiki/X.509'
	},
	{
		value: '7400',
		message: 'The 7400 series, a popular logic family.',
		link: 'https://en.wikipedia.org/wiki/7400-series_integrated_circuits'
	},
	{
		value: '8831',
		message: 'The 88x31 web button.',
		link: 'https://indieweb.org/88x31',
	},
	{
		value: '19937',
		message: 'The MT19937 pseudorandom number generator, commonly used in C++.',
		link: 'https://en.wikipedia.org/wiki/Mersenne_Twister'
	},
	{
		value: '2600',
		message: 'The 2600Hz phreaking tone.',
		link: 'https://en.wikipedia.org/wiki/2600_hertz'
	},
	{
		value: '2718',
		message: "The last release of Python 2, version 2.7.18. Bonus points if you recognized Euler's number.",
		link: 'https://en.wikipedia.org/wiki/History_of_Python#Version_2'
	},
	{
		value: '5994',
		message: 'The 59.94Hz field refresh frequency for NTSC color.',
		link: 'https://en.wikipedia.org/wiki/NTSC#Resolution_and_refresh_rate'
	},
	{
		value: '437',
		message: 'The original IBM PC code page.',
		link: 'https://en.wikipedia.org/wiki/Code_page_437'
	},
	{
		value: '471768',
		message: 'The truncated solution to the 25-year-long Busy Beaver Challenge.',
		link: 'https://bbchallenge.org/story'
	}
].map((number) => ({ ...number, guessed: false }));

const technicallyIncorrectNumbers = [
	{
		value: '775',
		message: 'The "775" chmod octal permission mode'
	},
	{
		value: '740',
		message: 'The "740" chmod octal permission mode'
	},
	{
		value: '255',
		message: 'The maximum value for an 8-bit unsigned integer'
	},
	{
		value: '301',
		message: 'The HTTP status code for "Moved Permanently"'
	},
	{
		value: '400',
		message: 'The HTTP status code for "Bad Request"'
	},
	{
		value: '404',
		message: 'The HTTP status code for "Not Found"'
	},
	{
		value: '500',
		message: 'The HTTP status code for "Internal Server Error"'
	},
	{
		value: '860',
		message: 'The Intel i860 microprocessor'
	},
	{
		value: '0000',
		message: 'The IP block containing all possible IP addresses'
	},
	{
		value: '9443',
		message: 'The alternate SSL port for TCP'
	}
].map((number) => ({ ...number, guessed: false }));

export function load() {
	return { numbers, technicallyIncorrectNumbers };
}
