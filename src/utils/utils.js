export const transition = delay => ({
    type: "spring",
    stiffness: 360,
    damping: 200,
    delay: delay,
});