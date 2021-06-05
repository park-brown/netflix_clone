import React, { useEffect } from 'react';
import { Grid, Box, Typography, InputBase, Button, Checkbox, FormControlLabel, Avatar } from '@material-ui/core';
const Login = () => {
	useEffect(() => {
		document.title = 'Netflix';
	}, []);
	return (
		<Grid
			container
			sx={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				position: 'relative',
				alignContent: 'flex-start'
			}}>
			{/*Header */}
			<Grid
				item
				xs={12}
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					py: { md: '40px', sm: '30px', xs: '20px' },
					pl: { md: '40px', sm: '30px', xs: '20px' }
				}}>
				<Box
					sx={{
						width: { md: '10.4375rem', sm: '8rem', xs: '5.5rem' },
						height: { md: '2.8125rem', sm: '2rem', xs: '1.5rem' },

						backgroundImage: 'url(./images/Netflix-Logo.png)',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}></Box>
			</Grid>
			{/*Background container */}
			<Grid item xs={12} sx={{ height: 0 }}>
				{/*Background image */}
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: -1,
						backgroundImage: 'url(./images/login_background.jpg)',
						backgroundPosition: 'top',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}></Box>

				{/*Background gradient */}
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: -1,
						background: 'rgba(0,0,0,.4)',
						backgroundImage: 'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)'
					}}></Box>
			</Grid>
			{/*login form */}
			<Grid
				container
				item
				md={4}
				sm={8}
				xs={12}
				sx={{
					minHeight: { md: '660px', sm: '625px', xs: '550px' },
					bgcolor: 'rgba(0,0,0,.75)',
					p: { md: '60px 50px 40px 50px', sm: '20px 40px 20px 40px', xs: '20px 10px 20px 10px' },
					borderRadius: '6px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}>
				{/*form main */}
				<Box sx={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography
						variant='h6'
						sx={{ color: '#fff', alignSelf: 'stretch', fontSize: '32px', fontWeight: 700, mb: '1.6rem' }}>
						Sign in
					</Typography>
					{/*form */}
					<Box component='form' sx={{ width: '100%' }}>
						<InputBase
							placeholder='email or phone number'
							type='text'
							sx={{ width: '100%', bgcolor: '#f3f3f3', height: '50px', mb: '16px' }}
						/>
						<InputBase
							placeholder='password'
							type='password'
							sx={{ width: '100%', bgcolor: '#f3f3f3', height: '50px', mb: '16px' }}
						/>
						<Button
							sx={{
								width: '100%',
								color: '#f9f9f9',
								bgcolor: '#e50914',
								p: '16px',
								my: '24px',
								'&:hover,&:active': { bgcolor: '#c70610' }
							}}>
							Sign in
						</Button>
						{/*help and remember me */}
						<Box
							sx={{
								width: '100%',

								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}>
							<FormControlLabel
								sx={{ color: '#f3f3f3', '& .MuiTypography-root': { fontSize: '0.875rem' } }}
								control={<Checkbox defaultChecked />}
								label='Remember me'
							/>
							<Typography variant='body2' sx={{ color: '#f3f3f3' }}>
								Need help?
							</Typography>
						</Box>
					</Box>
					{/*Hybrid login other */}
					<Box
						sx={{
							width: '100%',
							height: '324px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							textAlign: 'left'
						}}>
						<Box sx={{ alignSelf: 'stretch', display: 'flex', alignItems: 'center', mt: '16px' }}>
							<Avatar
								variant='square'
								alt='FB-LOGO'
								src='./images/FB-f-Logo__blue_57.png'
								sx={{ width: '20px', height: '20px', mr: '10px' }}
							/>
							<Typography variant='body2' sx={{ color: '#f3f3f3' }}>
								log in with facebook
							</Typography>
						</Box>
						<Box sx={{ alignSelf: 'stretch', display: 'flex', alignItems: 'center', mt: '16px' }}>
							<Typography variant='h6' sx={{ color: '#f3f3f3' }}>
								New to Netflix?
							</Typography>
							<Button sx={{ color: '#f3f3f3', fontSize: '1.2rem' }}>Sign up</Button>
						</Box>
						<Box sx={{ alignSelf: 'stretch', display: 'flex', alignItems: 'center', mt: '16px' }}>
							<Typography variant='body2' sx={{ color: '#f3f3f3' }}>
								This page is protected by Google reCAPTCHA to ensure you're not a bot.{'  '}
								<Typography variant='body2' sx={{ color: '#0071eb' }} component='span'>
									learn more.
								</Typography>
							</Typography>
						</Box>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Login;
