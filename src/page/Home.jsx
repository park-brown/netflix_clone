import React from 'react';
import { Grid, AppBar, Toolbar, Button, Box, Typography, InputBase, Avatar } from '@material-ui/core';

const Home = () => {
	return (
		<Grid container>
			<Grid
				item
				container
				xs={12}
				sx={{
					minHeight: '100vh',
					position: 'relative',
					justifyContent: 'center',
					alignContent: 'flex-start',

					borderBottom: '8px solid #222'
				}}>
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
						mt: { md: '12rem', sm: '4rem', xs: '4rem' },
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
			<Grid
				item
				container
				xs={12}
				sx={{
					minHeight: '65vh',

					bgcolor: '#000',
					borderBottom: '8px solid #222',
					px: { md: '45px', sm: '45px', xs: '5%' },
					py: { md: '70px', sm: '70px', xs: '50px' },
					position: 'relative'
				}}>
				{/*Text container */}

				<Grid item md={6} sm={12} xs={12} sx={{ pr: { md: '48px', sm: '0px', xs: '0px' } }}>
					<Box
						sx={{
							maxWidth: { md: '550px', sm: '100%', xs: '100%' },
							ml: 'auto',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },
							textAlign: 'left'
						}}>
						<Typography variant='h2' sx={{ color: '#f9f9f9', mb: '0.5rem' }}>
							Enjoy on your TV.
						</Typography>
						<Typography variant='h6' sx={{ color: '#f9f9f9', mt: '0.75rem', mb: '0.25rem' }}>
							Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more..
						</Typography>
					</Box>
				</Grid>
				{/*Video container */}
				<Grid item md={6} sm={12} xs={12}>
					<Box
						sx={{
							maxWidth: { md: '550px', sm: '550px', xs: '100%' },
							mr: { md: 'auto' },
							mx: { md: null, sm: 'auto' },
							height: '100%',
							position: 'relative',
							overflow: 'hidden'
						}}>
						{/*IMAGE  */}
						<Box
							sx={{
								height: 0,
								paddingTop: '75%',
								backgroundImage: 'url(./images/tv.png)',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}></Box>

						{/*Video animation */}
						<Box
							sx={{
								position: 'absolute',
								height: '100%',
								width: '100%',
								top: '45.5%',
								left: '50%',
								maxWidth: '72%',
								maxHeight: '54%',
								transform: 'translate(-50%,-50%)'
							}}>
							<video
								playsInline
								autoPlay
								muted
								loop
								style={{ width: '100%', height: '100%', display: 'inline-block', verticalAlign: 'baseline' }}>
								<source src='./video/video-tv-0819.m4v' type='video/mp4' />
							</video>
						</Box>
					</Box>
				</Grid>
			</Grid>
			{/*Download your show to watch offline */}
			<Grid
				item
				container
				xs={12}
				sx={{
					minHeight: '65vh',

					bgcolor: '#000',
					borderBottom: '8px solid #222',
					px: { md: '45px', sm: '45px', xs: '5%' },
					py: { md: '70px', sm: '70px', xs: '50px' },
					position: 'relative'
				}}>
				{/*Video container */}
				<Grid item md={6} sm={12} xs={12}>
					<Box
						sx={{
							maxWidth: { md: '600px', sm: '550px', xs: '100%' },
							ml: { md: 'auto', sm: 'auto' },
							mr: { md: '0px', sm: 'auto' },
							height: '100%',
							position: 'relative',
							overflow: 'hidden'
						}}>
						{/*IMAGE  */}
						<Box
							sx={{
								height: 0,
								paddingTop: '75%',
								backgroundImage: 'url(./images/mobile-0819.jpg)',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}></Box>

						{/*Video download animation */}
						<Box
							sx={{
								position: 'absolute',
								width: '60%',
								minWidth: '16rem',
								height: { md: '6rem', sm: '5rem', xs: '5rem' },
								left: '50%',
								bottom: '4%',
								transform: 'translateX(-50%)',
								background: '#000',
								border: '2px solid rgba(255,255,255,0.25)',
								borderRadius: '0.75rem',
								boxShadow: '0 0 2rem #000',
								padding: { md: '0.5rem 0.75rem', sm: '0.3rem 0.7rem', xs: '0.25rem 0.6rem' },
								display: 'flex',
								alignItems: 'center'
							}}>
							<Avatar
								variant='square'
								src='./images/boxshot.png'
								sx={{ width: '57px', height: '100%', mr: '1rem', flexShrink: 0, flexGrow: 0 }}
							/>
							<Box sx={{ flex: 1, my: '0.3rem' }}>
								<Typography variant='subtitle1' sx={{ color: '#f9f9f9', mb: '0.5rem', fontSize: '10px' }}>
									Stranger Things
								</Typography>
								<Typography variant='subtitle2' sx={{ color: '#0071eb', fontSize: '10px' }}>
									Downloading...
								</Typography>
							</Box>
							<Box
								sx={{
									width: '48px',
									height: '60px',
									backgroundImage:
										'url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif)',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat'
								}}></Box>
						</Box>
					</Box>
				</Grid>
				{/*Text container */}
				<Grid item md={6} sm={12} xs={12}>
					<Box
						sx={{
							maxWidth: { md: '550px', sm: '100%', xs: '100%' },
							mx: 'auto',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },
							textAlign: 'center'
						}}>
						<Typography variant='h2' sx={{ color: '#f9f9f9', mb: '0.5rem' }}>
							Download your shows to watch offline.
						</Typography>
						<Typography variant='h6' sx={{ color: '#f9f9f9', mt: '0.75rem', mb: '0.25rem' }}>
							Save your favorites easily and always have something to watch.
						</Typography>
					</Box>
				</Grid>
			</Grid>
			{/*watch everywhere section */}
			<Grid
				item
				container
				xs={12}
				sx={{
					minHeight: '65vh',

					bgcolor: '#000',
					borderBottom: '8px solid #222',
					px: { md: '45px', sm: '45px', xs: '5%' },
					py: { md: '70px', sm: '70px', xs: '50px' },
					position: 'relative'
				}}>
				{/*Text container */}

				<Grid item md={6} sm={12} xs={12} sx={{ pr: { md: '48px', sm: '0px', xs: '0px' } }}>
					<Box
						sx={{
							maxWidth: { md: '550px', sm: '100%', xs: '100%' },
							ml: 'auto',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },
							textAlign: 'left'
						}}>
						<Typography variant='h2' sx={{ color: '#f9f9f9', mb: '0.5rem' }}>
							Watch everywhere.
						</Typography>
						<Typography variant='h6' sx={{ color: '#f9f9f9', mt: '0.75rem', mb: '0.25rem' }}>
							Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
						</Typography>
					</Box>
				</Grid>
				{/*Video container */}
				<Grid item md={6} sm={12} xs={12}>
					<Box
						sx={{
							maxWidth: { md: '550px', sm: '550px', xs: '100%' },
							mr: { md: 'auto' },
							mx: { md: null, sm: 'auto' },
							height: '100%',
							position: 'relative',
							overflow: 'hidden'
						}}>
						{/*IMAGE  */}
						<Box
							sx={{
								height: 0,
								paddingTop: '75%',
								backgroundImage: 'url(./images/device-pile.png)',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}></Box>

						{/*Video animation */}
						<Box
							sx={{
								position: 'absolute',
								height: '100%',
								width: '100%',
								top: '34%',
								left: '50%',
								maxWidth: '63%',
								maxHeight: '47%',
								transform: 'translate(-50%,-50%)'
							}}>
							<video
								playsInline
								autoPlay
								muted
								loop
								style={{ width: '100%', height: '100%', display: 'inline-block', verticalAlign: 'baseline' }}>
								<source
									src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
									type='video/mp4'
								/>
							</video>
						</Box>
					</Box>
				</Grid>
			</Grid>

			{/*Create profile for kids section */}
			<Grid
				item
				container
				xs={12}
				sx={{
					minHeight: '65vh',

					bgcolor: '#000',
					borderBottom: '8px solid #222',
					px: { md: '45px', sm: '45px', xs: '5%' },
					py: { md: '70px', sm: '70px', xs: '50px' },
					position: 'relative'
				}}>
				{/*Video container */}
				<Grid item md={6} sm={12} xs={12}>
					<Box
						sx={{
							maxWidth: { md: '600px', sm: '550px', xs: '100%' },
							ml: { md: 'auto', sm: 'auto' },
							mr: { md: '0px', sm: 'auto' },
							height: '100%',
							position: 'relative',
							overflow: 'hidden'
						}}>
						{/*IMAGE  */}
						<Box
							sx={{
								height: 0,
								paddingTop: '75%',
								backgroundImage: 'url(./images/profileForkids.png)',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							}}></Box>
					</Box>
				</Grid>
				{/*Text container */}
				<Grid item md={6} sm={12} xs={12}>
					<Box
						sx={{
							maxWidth: { md: '550px', sm: '100%', xs: '100%' },
							mx: 'auto',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },
							textAlign: 'center'
						}}>
						<Typography variant='h2' sx={{ color: '#f9f9f9', mb: '0.5rem' }}>
							Create profiles for kids.
						</Typography>
						<Typography variant='h6' sx={{ color: '#f9f9f9', mt: '0.75rem', mb: '0.25rem' }}>
							Send kids on adventures with their favorite characters in a space made just for them—free with your
							membership.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
