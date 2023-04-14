CreateThread(function()
    while GetResourceState("lb-phone") ~= "started" do
        Wait(0)
    end

    local removed, errorMessage = exports["lb-phone"]:RemoveCustomApp("qb-racing") -- where test-app is the identifier of the app
    if not removed then
        print("Could not remove app:", errorMessage)
    end

    local added, errorMessage = exports["lb-phone"]:AddCustomApp({
        identifier = "qb-racing",
        name = "Racing",
        description = "Get your street race on!",
        developer = "Hall",
        defaultApp = false, -- OPTIONAL if set to true, app should be added without having to download it,
        size = 59812, -- OPTIONAL in kb
        -- images = { "https://example.com/photo.jpg" }, -- OPTIONAL array of images for the app on the app store
        ui = GetCurrentResourceName() .. "/web/dist/index.html" -- this is the path to the HTML file
    })
    if not added then
        print("Could not add app:", errorMessage)
    end
end)
