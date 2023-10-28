import { List, ListItem, ListIcon, Checkbox } from "@chakra-ui/react";

function App() {
	return (
		<>
			<List spacing={3}>
				<ListItem>
					<ListIcon
						as={() => <Checkbox onChange={console.log} />}
						color="green.500"
					/>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit
				</ListItem>
				<ListItem>
					<ListIcon as={Checkbox} color="green.500" />
					Assumenda, quia temporibus eveniet a libero incidunt
					suscipit
				</ListItem>
				<ListItem>
					<ListIcon as={Checkbox} color="green.500" />
					Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
				</ListItem>
				{/* You can also use custom icons from react-icons */}
				<ListItem>
					<ListIcon as={Checkbox} color="green.500" />
					Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
				</ListItem>
			</List>
		</>
	);
}

export default App;
