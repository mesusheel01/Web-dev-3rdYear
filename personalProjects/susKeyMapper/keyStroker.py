# from tkinter import Tk, Label

# import keyboard #used to capture keyboard in real-time

# keyCounts = {}

# # function to handle keypress events

# def onKeyEvent(e):
#     key = e.name
#     keyCounts[key] = keyCounts.get(key, 0 )+ 1
#     label.config(text=f"Key: {key}\nCount: {keyCounts[key]}")

# #creating gui window

# root = Tk()
# root.title("SusKeyTracker") #title
# root.geometry("300x100") # initializes screent with height and witdth
# root.attributes('-topmost', True) #keep the window on top

# #add label to display keystrokes
# label = Label(root, text="Press a key...", font=("Arial", 24))
# label.pack()

# #register the key event listener
# keyboard.on_press(onKeyEvent)

# #Run the GUI loop
# root.mainloop()



# chatgpt
from tkinter import Tk, Label, Canvas
import keyboard

# Dictionary to track key presses and counts
keyCounts = {}

# Function to handle key press events
def onKeyEvent(e):
    key = e.name
    keyCounts[key] = keyCounts.get(key, 0) + 1
    label.config(text=f"Key: {key}\nCount: {keyCounts[key]}")
    updateAppearance()

# Function to update the appearance dynamically
def updateAppearance():
    # Dynamically change font size based on the key count (example)
    count = keyCounts.get(currentKey, 0)
    if count > 10:
        label.config(font=("Arial", 28, "bold"))
    else:
        label.config(font=("Arial", 24))
    label.config(fg="green" if count % 2 == 0 else "blue")

# Function to enable dragging the window
def onMouseDrag(event):
    # Move the window to the new position
    new_x = root.winfo_x() + event.x - offset_x
    new_y = root.winfo_y() + event.y - offset_y
    root.geometry(f"+{new_x}+{new_y}")
    print(f"+{new_x}+{new_y}")
def onMousePressed(event):
    # Store the offset (initial position of the mouse click)
    global offset_x, offset_y
    offset_x = event.x
    offset_y = event.y

# Creating the main window
root = Tk()
root.title("SusKeyTracker")  # Title of the window

# Set the size and make the window transparent
root.geometry("300x150+1093+586")  # Size of the window
root.attributes('-topmost', True)  # Keep window on top
root.config(bg="black")  # Background color

# Make the window transparent
root.wm_attributes("-transparentcolor", "black")  # Color to be transparent
root.wm_attributes("-alpha", 0.34)  # Set transparency level (0.0 to 1.0)
root.overrideredirect(True)  # Remove title bar for cleaner look

# Create a canvas to draw the window with rounded corners
canvas = Canvas(root, width=300, height=150, bg='black', bd=0, highlightthickness=2)
canvas.pack()

label = Label(root, text="Press a key...", font=("Arial", 24), fg="white", bg="black")
label.place(relx=0.5, rely=0.5, anchor="center")

# Register the key event listener
keyboard.on_press(onKeyEvent)

# Bind mouse events for dragging the window
root.bind("<ButtonPress-1>", onMousePressed)  # When mouse is clicked
root.bind("<B1-Motion>", onMouseDrag)        # When mouse is dragged

# Run the GUI loop
root.mainloop()
