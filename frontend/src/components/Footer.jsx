const Footer = () => {
	return (
		<footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
			<div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built by{" "}
					<a
						href='https://www.instagram.com/manish_nemade_190?igsh=MXZmeWVkd3I2aTdnbw=='
						target='_blank'
						className='font-medium underline underline-offset-4'
					>
						Manish
					</a>
					 , visit for connect {"  "}
					<a
						href='https://www.linkedin.com/in/manish-nemade-aaa69b28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						OnLinken
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;