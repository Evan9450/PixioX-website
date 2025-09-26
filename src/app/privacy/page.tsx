"use client";

import { ArrowLeft, Eye, Lock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: Sep 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Local Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Your photos never leave your device
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">No Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  We don't track your usage or behavior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Lock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Secure</h3>
                <p className="text-sm text-muted-foreground">
                  Your data remains private and secure
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Information We Collect
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    <strong>Photos and Media:</strong> PixioX accesses your
                    photo library only to provide organization and browsing
                    features. All processing happens locally on your device.
                  </p>
                  {/* <p>
                    <strong>App Usage:</strong> We may collect anonymous usage
                    statistics to improve the app experience, but this data
                    cannot be linked to your identity.
                  </p> */}
                  <p>
                    <strong>Device Information:</strong> Basic device
                    information (iOS version, device model) may be collected for
                    compatibility and performance optimization.
                  </p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  How We Use Your Information
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Organize and display your photos within the app</li>
                    <li>
                      Provide smart categorization and search functionality
                    </li>
                    <li>
                      Enable gesture-based controls and Live Photo support
                    </li>
                    <li>Improve app performance and fix bugs</li>
                    <li>
                      Ensure compatibility with your device and iOS version
                    </li>
                  </ul>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Data Storage and Security
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    <strong>Local Storage:</strong> All your photos and
                    organizational data remain on your device. PixioX does not
                    upload your photos to external servers.
                  </p>
                  <p>
                    <strong>iCloud Sync:</strong> If you enable iCloud Photos,
                    your photos sync through Apple's iCloud service according to
                    Apple's privacy policy.
                  </p>
                  <p>
                    <strong>Security:</strong> We implement industry-standard
                    security measures to protect the app and your data from
                    unauthorized access.
                  </p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  PixioX integrates with Apple's Photos framework and iCloud
                  Photos service. These integrations are governed by Apple's
                  privacy policy. We do not share your data with any other
                  third-party services.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Your Rights and Choices
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      You can revoke photo library access at any time through
                      iOS Settings
                    </li>
                    <li>
                      You can delete the app and all associated data by
                      uninstalling PixioX
                    </li>
                    <li>
                      You control iCloud sync settings through your Apple ID
                      preferences
                    </li>
                    <li>
                      You can opt out of anonymous usage analytics in the app
                      settings
                    </li>
                  </ul>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the "Last updated" date.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                   visit our Contact page.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
