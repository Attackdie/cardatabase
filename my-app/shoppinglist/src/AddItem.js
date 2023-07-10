import React, {useState} from "react";
import { Button } from "@mui/material/Button";
import { TextField } from "@mui/material/TextField";
import { Dialog } from "@mui/material/Dialog";
import { DialogActions } from "@mui/material/DialogActions";
import { DialogContent } from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material/DialogTitle";

function AddItem(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value})
    }
    const [item, setItem] = React.useState({
        product: '',
        amount: ''
    });

    return(
        <div>
            <Button onClick={handleOpen}>
                Add item
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>new item</DialogTitle>
                <DialogContent>
                    <TextField value={item.product} margin="dense"
                    onChange={handleChange} name="product" 
                    label="Product" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={AddItem}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default AddItem;