import React from 'react';
import { Grid, AppBar, Toolbar, Button, Box, Typography, TextField, InputBase } from '@material-ui/core';
const Home = () => {
	return (
		<Grid container>
			<Grid
				item
				container
				xs={12}
				sx={{ minHeight: '100vh', position: 'relative', justifyContent: 'center', alignContent: 'flex-start' }}>
				{/*Appbar */}
				<AppBar elevation={0} position='static' sx={{ bgcolor: 'transparent', pt: '20px' }}>
					<Toolbar sx={{ justifyContent: 'space-between' }}>
						<Box
							sx={{
								width: { md: '10.4375rem', sm: '8rem', xs: '5.5rem' },
								height: { md: '2.8125rem', sm: '2rem', xs: '1.5rem' },

								backgroundImage: 'url(./images/Netflix-Logo.png)',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}></Box>
						<Button
							sx={{
								bgcolor: '#e50914',
								color: '#f9f9f9',
								py: '7px',
								px: '17px',
								'&:hover,&:active': { bgcolor: '#c70610' }
							}}>
							Sign in
						</Button>
					</Toolbar>
				</AppBar>
				{/*Background image contaienr */}
				<Grid
					item
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						height: '100%',
						zIndex: -1
					}}>
					{/*background imgage */}
					<Box
						sx={{
							height: '100%',
							backgroundImage: 'url(./images/US-en-20210524-popsignuptwoweeks-perspective_alpha_website_small.jpg)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'top'
						}}></Box>

					{/*image gradient */}
					<Box
						sx={{
							position: 'absolute',
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							background: 'rgba(0,0,0,.4)',
							backgroundImage: 'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)'
						}}></Box>
				</Grid>
				{/*content */}
				<Grid
					item
					container
					xs={12}
					sx={{
						position: 'relative',
						zIndex: 1,
						mt: { md: '12rem', sm: '8rem', xs: '5rem' },
						px: { md: '0px', sm: '4rem', xs: '1rem' },
						minHeight: { md: '60vh', sm: '60vh', xs: '60vh' },
						maxWidth: '960px',
						textAlign: 'center',
						alignContent: 'flex-start'
					}}>
					<Grid item xs={12} sx={{ height: 'fit-content' }}>
						<Typography variant='h1' sx={{ color: '#f9f9f9' }}>
							Unlimited movies, TV shows, and more.
						</Typography>
						<Typography variant='h5' sx={{ color: '#f9f9f9', my: '1rem' }}>
							Watch anywhere. Cancel anytime.
						</Typography>
					</Grid>

					<Grid
						item
						xs={12}
						sx={{
							height: 'fit-content',
							px: { md: '4rem', sm: '3rem', xs: '1rem' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start'
						}}>
						<Typography variant='h5' sx={{ color: '#f9f9f9', pb: '1.25rem' }}>
							Ready to watch? Enter your email to create or restart your membership.
						</Typography>
						{/*email input */}
						<Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
							<InputBase
								multiline
								maxRows={2}
								placeholder='email address'
								variant='outlined'
								sx={{
									width: '75%',
									height: '3.5rem',
									bgcolor: '#f9f9f9',
									borderTopLeftRadius: '4px',
									borderBottomLeftRadius: '4px'
								}}
							/>
							<Button
								sx={{
									flex: 1,
									height: '3.5rem',
									bgcolor: '#e50914',
									color: '#f9f9f9',
									fontSize: { md: '0.8rem', xs: '0.4rem' },
									py: { md: '7px', sm: '7px', xs: 0 },
									px: { md: '17px', sm: '17px', xs: 0 },
									borderRadius: '0px',
									'&:hover,&:active': { bgcolor: '#c70610' }
								}}>
								Get Started
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
