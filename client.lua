CreateThread(function()
    while GetResourceState("lb-phone") ~= "started" do
        Wait(0)
    end

    exports["lb-phone"]:RemoveCustomApp("qb-racing")

    exports["lb-phone"]:AddCustomApp({
        identifier = "qb-racing",
        name = "Racing",
        description = "Get your street race on!",
        developer = "Hall's",
        defaultApp = false, -- OPTIONAL if set to true, app should be added without having to download it,
        size = 59812, -- OPTIONAL in kb
        -- images = { "https://example.com/photo.jpg" }, -- OPTIONAL array of images for the app on the app store
        ui = GetCurrentResourceName() .. "/web/dist/index.html",
        icon = "https://cfx-nui-" .. GetCurrentResourceName() .. "/web/dist/app-icon.png",
    })
end)
