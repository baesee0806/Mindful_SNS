'use client';
import styled from 'styled-components';
import {
	TentTree,
	House,
	Send,
	CircleUserRound,
	SquarePlus,
	Search,
} from 'lucide-react';
const ServicePageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Container>
			{/* side menu */}
			<SidebarContainer>
				<SidebarHeader>
					<TentTree />
					<h1>Mindful</h1>
				</SidebarHeader>
				<SearchBarContainer>
					<Search />
					<input type="text" placeholder="검색" />
				</SearchBarContainer>
				<SidebarMenuItem>
					<House />
					<p>Home</p>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<CircleUserRound />
					<p>Profile</p>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<Send />
					<p>Message</p>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SquarePlus />
					<p>Add Write</p>
				</SidebarMenuItem>
			</SidebarContainer>
			{children}
		</Container>
	);
};

export default ServicePageLayout;

const Container = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 230px auto;
	@media only screen and (max-width: 1200px) {
		grid-template-columns: 0.1fr auto;
	}
	@media only screen and (max-width: 758px) {
		grid-template-columns: auto;
		grid-template-rows: 1fr auto;
	}
`;
// side menu
const SidebarContainer = styled.div`
	min-width: 70px;
	height: 100%;
	border-right: 1px solid #262626;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 1200px) {
		min-width: 50px;
		align-items: center;
	}
	@media only screen and (max-width: 758px) {
		height: 89px;
		border-right: none;
		border-bottom: 1px solid #262626;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;
const SidebarHeader = styled.div`
	display: flex;
	align-items: center;
	margin: 37px 0 13px 37px;
	cursor: pointer;
	& > h1 {
		margin-left: 10px;
	}
	@media only screen and (max-width: 1200px) {
		margin: 37px 0 13px 0;
		& > h1 {
			display: none;
		}
	}
	@media only screen and (max-width: 758px) {
		height: 100%;
		margin: 0 0 0 37px;
		display: flex;
		align-items: center;
		& > h1 {
			display: block;
		}
	}
`;
const SearchBarContainer = styled.div`
	display: none;
	@media only screen and (max-width: 758px) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		& > svg {
			position: relative;
			top: 0;
			left: 40px;
		}
		& > input {
			width: 90%;
			height: 50%;
			border-radius: 8px;
			border: 1px solid #262626;
			padding-left: 50px;
			font-size: 16px;
			&:focus {
				outline: none;
			}
		}
	}
`;

const SidebarMenuItem = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	border-radius: 8px;
	padding: 10px 8px;
	margin-top: 16px;
	margin-left: 29px;
	margin-bottom: 10px;
	cursor: pointer;

	&:hover {
		background-color: #262626;
		& > svg,
		p {
			background-color: #262626;
		}
	}
	& > p {
		margin-left: 10px;
	}
	@media only screen and (max-width: 1200px) {
		width: auto;
		padding: 10px;
		margin-left: 0;
		& > p {
			display: none;
			margin-left: 0;
		}
	}
	@media only screen and (max-width: 758px) {
		display: none;
	}
`;
