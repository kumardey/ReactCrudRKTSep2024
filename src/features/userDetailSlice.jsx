import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
    "userDetail/createUser",
    async (data, { rejectWithValue }) => {
        try {
           
            const response = await fetch("https://660e380e6ddfa2943b361af3.mockapi.io/crud", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log("data2", result);
            return result;
        } catch (error) {
            console.error("Error:", error);
            return rejectWithValue(error.message);
        }
    }
);

export const showUser = createAsyncThunk(
    "userDetail/showUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://660e380e6ddfa2943b361af3.mockapi.io/crud");
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error:", error);
            return rejectWithValue(error.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "userDetail/deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://660e380e6ddfa2943b361af3.mockapi.io/crud/${id}`,
                {method:"DELETE"}
            );
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error:", error);
            return rejectWithValue(error.message);
        }
    }
);

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(showUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users =action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                
                
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                // state.users =action.payload;
                const {id} = action.payload;

                
                if(id){
                    state.users =state.users.filter((ele)=>ele.id !== id);
                }
                console.log("delete action",action.payload);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userDetail.reducer;