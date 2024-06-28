package com.screen_usage.app

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper
import com.facebook.react.shell.MainReactPackage
import java.util.Arrays

class MainApplication : Application(), ReactApplication {

    private val mReactNativeHost = ReactNativeHostWrapper(
        this,
        object : DefaultReactNativeHost(this) {
            override fun getPackages(): List<ReactPackage> {
                return Arrays.asList(
                    MainReactPackage(),
                    ScreenTimePackage()  // Add this line to include your package
                )
            }

            override fun getUseDeveloperSupport(): Boolean {
                return BuildConfig.DEBUG
            }

            override fun getJSMainModuleName(): String {
                return "index"
            }
        }
    )

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
        ApplicationLifecycleDispatcher.onApplicationCreate(this)
    }
}
