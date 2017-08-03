export default function getSelectedRows(data) {
  return {
		type: 'GET_SELECTED_ROWS',
		selectedrows: data
	}
}